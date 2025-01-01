import React, { useEffect, useRef, useState } from "react";
import bgImg from "../../assets/others/authentication.png";
import sticker from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import { Helmet } from "react-helmet-async";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { setUser, signIn, setLoading } = useAuth();
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        Swal.fire({
          title: "Successful!",
          text: "Successfully logged in!",
          icon: "success",
        });
        setUser(user);
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          title: "Somthing Wrong!",
          text: err,
          icon: "error",
        });
      });
  };

  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="h-screen py-2 flex justify-center items-center"
    >
      <Helmet>
        <title>Urban Feast | Sign In</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-11/12 lg:h-[50rem] h-[58rem] border-2 mx-auto shadow-2xl p-14 py-10 flex justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-14">
          <div className="text-center lg:text-left lg:w-1/2">
            <img className="lg:w-[650px] w-[350px]" src={sticker} alt="" />
          </div>
          <div className="lg:w-[540px] w-full shrink-0">
            <h2 className="lg:text-4xl text-xl text-center font-bold">
              Sign In
            </h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-[#444444]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="rounded-md p-3 px-7 lg:p-4"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label rounded-md my-2">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchaRef}
                  type="text"
                  name="captcha"
                  placeholder="type the captcha above"
                  className="rounded-md p-3 px-7 lg:p-4"
                  required
                  onBlur={handleValidateCaptcha}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  disabled={disabled}
                  className="btn p-3 rounded-md bg-[#ffcb3b] border-none text-black hover:bg-gray-400 hover:border-[1px] hover:border-black transform transition-all duration-500"
                >
                  Sign In
                </button>
              </div>
            </form>
            <div className="flex justify-center flex-col items-center gap-4">
              <div className="mt-6">
                <p className="text-[#D1A054]">
                  New here?{" "}
                  <span className="font-bold">
                    <Link to={"/signup"}>Create New Account</Link>
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
