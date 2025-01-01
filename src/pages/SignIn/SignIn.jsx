import React from "react";
import bgImg from "../../assets/others/authentication.png";
import sticker from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" h-screen p-10 py-2 flex justify-center items-center"
    >
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="lg:w-10/12 h-[50rem] mx-auto shadow-2xl p-14 py-10 flex justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left w-1/2">
            <img className="w-[650px]" src={sticker} alt="" />
          </div>
          <div className="w-[540px] shrink-0">
            <h2 className="text-4xl text-center font-bold">Sign In</h2>
            <form className="card-body gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="rounded-md p-4"
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
                  placeholder="password"
                  className="rounded-md p-4"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]"></span>
                </label>
                <input
                  type="recaptcha"
                  placeholder="recaptcha"
                  className="rounded-md p-4"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]"></span>
                </label>
                <input
                  type="recaptcha"
                  placeholder="recaptcha"
                  className="rounded-md p-4"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#D1A054B3] bg-opacity-[70%] border-none text-black hover:bg-gray-400 hover:border-[1px] hover:border-black transform transition-all duration-500">
                  Sign In
                </button>
              </div>
            </form>
            <div className="flex justify-center flex-col items-center gap-4">
              <div>
                <p className="text-[#D1A054]">
                  New here?{" "}
                  <span className="font-bold">
                    <Link>Create New Account</Link>
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

export default SignIn;
