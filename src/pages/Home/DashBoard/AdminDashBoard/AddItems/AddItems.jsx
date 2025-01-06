import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";
import { PiForkKnifeBold } from "react-icons/pi";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"---What's new?---"}
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
                {...register("name")}
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
                  {...register("category")}
                  className="h-16 select select-bordered rounded-md px-3"
                >
                  <option disabled value="">
                    Category
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
                  {...register("price")}
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
                {...register("recipe")}
                placeholder="Enter Receipe Details"
                className="h-64 input input-bordered rounded-md px-3 py-3"
              />
            </div>
            <div className="form-control my-3">
              <input
                {...register("image")}
                type="file"
                className="file-input  file-input-bordered w-full max-w-xs"
              />
            </div>
            <button
              className=" bg-[#EBAB23] text-white  w-44 hover:bg-slate-500 transform transition-all duration-500 rounded-md px-3 py-3 flex text-center font-bold gap-2 items-center text-xl justify-center"
              type="submit"
            >
              Add Item
              <PiForkKnifeBold />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
