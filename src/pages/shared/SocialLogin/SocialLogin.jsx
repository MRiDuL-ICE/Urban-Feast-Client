import React from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignin, setUser, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignin = () => {
    googleSignin()
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
  return (
    <div className="flex gap-6">
      <button className="w-10 h-10 text-xl rounded-full border-[1px] flex justify-center items-center border-black">
        <FaFacebookF />
      </button>
      <button
        onClick={handleGoogleSignin}
        className="w-10 h-10 text-xl rounded-full border-[1px] flex justify-center items-center border-black"
      >
        <FaGoogle />
      </button>
      <button className="w-10 h-10 text-xl rounded-full border-[1px] flex justify-center items-center border-black">
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogin;
