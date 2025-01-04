import React from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { RiTelegram2Fill } from "react-icons/ri";

const ContactForm = () => {
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
    <div className="bg-base-200 w-10/12 mx-auto py-32">
      <div className="w-10/12 mx-auto">
        <div className=" card w-full shrink-0">
          <form className="card-body" onSubmit={onSubmitWithReCAPTCHA}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">Name*</span>
                </label>
                <input
                  placeholder="Enter Your Name"
                  className="input input-bordered w-full py-7"
                  {...register("name", { required: true })}
                />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-lg">Email*</span>
                </label>
                <input
                  placeholder="Enter Your Email"
                  className="input input-bordered w-full py-7"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-lg">Phone*</span>
              </label>
              <input
                placeholder="Enter Your Phone Number"
                className="input input-bordered w-full py-7"
                {...register("phone", { required: true })}
              />
              {errors.phone && <span>This field is required</span>}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold text-lg">Message*</span>
              </label>
              <textarea
                placeholder="Write Your Meesage Here"
                className="h-[340px] p-4 rounded-md border border-slate-300 w-full py-7"
                {...register("message", { required: true })}
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdL4q0qAAAAAJU3UBFBr1jgrl2G0fWkV8EKOC9x"
              onChange={onChange}
            />
            <button className="p-3 px-2 flex bg-[#ebab23] w-3/12 text-lg hover:bg-slate-500 transform transition-all duration-500 mx-auto rounded-md text-center text-white font-bold justify-center items-center gap-2">
              Message <RiTelegram2Fill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
