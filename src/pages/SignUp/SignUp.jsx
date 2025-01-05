import React, { useEffect, useRef, useState } from "react";
import bgImg from "../../assets/others/authentication.png";
import sticker from "../../assets/others/authentication2.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, createNewUser, setLoading, logOut, setUser } = useAuth();

  const onSubmit = (data) => {
    createNewUser(data.email, data.password, data.displayName, data.photoURL)
      .then((res) => {
        const userInfo = {
          name: data.displayName,
          email: data.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Successful!",
              text: "Registration successfully done!",
              icon: "success",
            });
            setLoading(false);
            navigate("/signin");
            logOut()
              .then(() => {
                setUser(null);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Somthing Wrong!",
          text: err,
          icon: "error",
        });
      });
  };

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-screen py-2 flex justify-center items-center"
    >
      <Helmet>
        <title>Urban Feast | Sign Up</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-11/12 lg:h-[50rem] h-[52rem] border-2 mx-auto shadow-2xl p-14 py-10 flex justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-14">
          <div className="text-center lg:text-left lg:w-1/2">
            <img className="lg:w-[650px] w-[450px]" src={sticker} alt="" />
          </div>
          <div className="lg:w-[540px] w-full shrink-0">
            <h2 className="lg:text-4xl text-xl text-center font-bold">
              Sign Up
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-3"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Name*
                  </span>
                </label>
                <input
                  type="text"
                  {...register("displayName", { required: true })}
                  placeholder="Enter Your Name"
                  className="rounded-md p-3 px-7 lg:p-4"
                />
                {errors.displayName && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Email*
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email"
                  className="rounded-md p-3 px-7 lg:p-4"
                />
                {errors.email && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Photo URL*
                  </span>
                </label>
                <input
                  type="url"
                  {...register("photoURL", { required: true })}
                  placeholder="Enter Your photoURL"
                  className="rounded-md p-3 px-7 lg:p-4"
                />
                {errors.photoURL && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Password*
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,}$/,
                  })}
                  placeholder="Enter Password"
                  className="rounded-md p-3 px-7 lg:p-4"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600 mt-2">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600 mt-2">
                    Password must be atleast 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600 mt-2">
                    Password cannot be exceeds 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600 mt-2">
                    Must contain at least one number and one uppercase and
                    lowercase letter, and at least 6 or more characters
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn p-3 rounded-md bg-[#ffcb3b] border-none text-black hover:bg-gray-400 hover:border-[1px] hover:border-black transform transition-all duration-500"
                  value={"Sign Up"}
                />
              </div>
            </form>
            <div className="flex justify-center flex-col items-center gap-4">
              <div className="text-xs lg:text-lg mt-6">
                <p className="text-[#D1A054]">
                  Already have an account?{" "}
                  <span className="text-sm lg:text-lg font-bold">
                    <Link to={"/signin"}>Sign In Here</Link>
                  </span>
                </p>
              </div>
              <p className="text-[#444444] font-semibold">Or sign in with</p>
              <div className="flex gap-6">
                <button className="w-10 h-10 text-xl rounded-full border-[1px] flex justify-center items-center border-black">
                  <FaFacebookF />
                </button>
                <button className="w-10 h-10 text-xl rounded-full border-[1px] flex justify-center items-center border-black">
                  <FaGoogle />
                </button>
                <button className="w-10 h-10 text-xl rounded-full border-[1px] flex justify-center items-center border-black">
                  <FaGithub />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
