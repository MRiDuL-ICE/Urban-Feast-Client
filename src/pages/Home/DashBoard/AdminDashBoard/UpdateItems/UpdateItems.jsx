import React from "react";
import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaUtensils } from "react-icons/fa6";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { name, recipe, image, category, price, _id } = useLoaderData();
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: parseFloat(data.price),
      };
      // console.log(menuItem);
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          title: "Successful!",
          text: `${data.name} is updated`,
          icon: "success",
        });
        reset();
      } else {
        Swal.fire({
          title: "Something Wrong!",
          text: `${data.name} is not updated yet`,
          icon: "error",
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Update Item"}
        subHeading={"---Update your menu---"}
      ></SectionTitle>
      <div className="w-10/12 mx-auto h-screen">
        <div className="card w-full  shrink-0 shadow-lg p-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body w-11/12 mx-auto"
          >
            <div className="form-control">
              <label className="label">
                <span className="font-bold">Recipe Name*</span>
              </label>
              <input
                defaultValue={name}
                {...register("name", { required: true })}
                placeholder="Enter Recipe Name"
                className="h-16 input input-bordered rounded-md px-3"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Category*</span>
                </label>
                <select
                  defaultValue={category}
                  {...register("category", { required: true })}
                  className="h-16 select select-bordered rounded-md px-3"
                >
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="popular">Popular</option>
                  <option value="offered">Offered</option>
                  <option value="salad">Salad</option>
                  <option value="drinks">Drink</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-bold">Price*</span>
                </label>
                <input
                  defaultValue={price}
                  {...register("price", { required: true })}
                  placeholder="Enter Price"
                  className="h-16 input input-bordered rounded-md px-3"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="font-bold">Receipe Details*</span>
              </label>
              <textarea
                defaultValue={recipe}
                {...register("recipe", { required: true })}
                placeholder="Enter Receipe Details"
                className="h-64 input input-bordered rounded-md px-3 py-3"
              />
            </div>
            <div className="form-control my-3">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input  file-input-bordered w-full max-w-xs"
              />
            </div>
            <button
              className=" bg-[#EBAB23] uppercase text-white  w-40 hover:bg-slate-500 transform transition-all duration-500 rounded-md py-3 flex text-center font-bold gap-2 items-center justify-center"
              type="submit"
            >
              Update Item
              <FaUtensils />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItems;
