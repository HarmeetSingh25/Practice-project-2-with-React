import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { registeraction } from "../Store/Useractions/useraction";
import { useDispatch } from "react-redux";
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const Onsigup = (user) => {
    user.id = nanoid();
    // console.log(user);
    user.admin = false
    toast.success("Create Your Account");
    dispatch(registeraction(user));
    navigate("/");
    reset();
  };

  const onSignupError = (error) => {
    console.log(error);
    toast.error("Try Again ");
  };
  return (
    <div
      onSubmit={handleSubmit(Onsigup, onSignupError)}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4"
    >
      <form className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">Sign Up</h2>
        <input type="url" {...register("Profileimg", { required: "image is required" })} className="px-4 py-2 rounded-md bg-transparent border border-gray-600 
          focus:border-amber-400 focus:ring focus:ring-amber-500/40 outline-none 
          text-white placeholder-gray-400" placeholder="Image" />
        {errors.message && <p className="text-red-500">{errors.Profileimg.message}</p>}
        <input
          {...register("name", { required: "Name is required" })}
          className="px-4 py-2 rounded-md bg-transparent border border-gray-600 
          focus:border-amber-400 focus:ring focus:ring-amber-500/40 outline-none 
          text-white placeholder-gray-400"
          type="text"
          placeholder="Full Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          {...register("email", { required: "Email is required" })}
          className="px-4 py-2 rounded-md bg-transparent border border-gray-600 
          focus:border-amber-400 focus:ring focus:ring-amber-500/40 outline-none 
          text-white placeholder-gray-400"
          type="email"
          placeholder="Email Address"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          {...register("password", { required: "password is required" })}
          className="px-4 py-2 rounded-md bg-transparent border border-gray-600 
          focus:border-amber-400 focus:ring focus:ring-amber-500/40 outline-none 
          text-white placeholder-gray-400"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <input
          {...register("confirmpasword", { required: "Confirm your password" })}
          className="px-4 py-2 rounded-md bg-transparent border border-gray-600 
          focus:border-amber-400 focus:ring focus:ring-amber-500/40 outline-none 
          text-white placeholder-gray-400"
          type="password"
          placeholder="Confirm Password"
        />
        {errors.confirmpasword && (
          <p className="text-red-500">{errors.confirmpasword.message}</p>
        )}

        <button
          type="submit"
          className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-black 
          font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-200"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
