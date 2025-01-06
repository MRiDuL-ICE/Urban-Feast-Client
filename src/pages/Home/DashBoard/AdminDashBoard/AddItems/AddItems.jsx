import React from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { RiTelegram2Fill } from "react-icons/ri";
import SectionTitle from "../../../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const recaptchaRef = React.useRef();

  const onSubmitWithReCAPTCHA = async (data) => {
    const token = await recaptchaRef.current.executeAsync();

    // apply to form data
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch("example"));
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <SectionTitle
        heading={"ADD AN ITEM"}
        subHeading={"---What's new?---"}
      ></SectionTitle>
    </div>
  );
};

export default AddItems;
