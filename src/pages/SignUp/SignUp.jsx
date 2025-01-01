import React, { useEffect, useRef, useState } from "react";
import bgImg from "../../assets/others/authentication.png";
import sticker from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const SignUp = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-screen py-2 flex justify-center items-center"
    >
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-11/12 h-[52rem] border-2 mx-auto shadow-2xl p-14 py-10 flex justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-14">
          <div className="text-center lg:text-left lg:w-1/2">
            <img className="lg:w-[650px] w-[450px]" src={sticker} alt="" />
          </div>
          <div className="lg:w-[540px] w-full shrink-0">
            <h2 className="lg:text-4xl text-xl text-center font-bold">
              Sign Up
            </h2>
            <form onSubmit={""} className="flex flex-col gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="rounded-md p-3 px-7 lg:p-4"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="rounded-md p-3 px-7 lg:p-4"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="rounded-md p-3 px-7 lg:p-4"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn p-3 rounded-md bg-[#ffcb3b] border-none text-black hover:bg-gray-400 hover:border-[1px] hover:border-black transform transition-all duration-500">
                  Sign Up
                </button>
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
