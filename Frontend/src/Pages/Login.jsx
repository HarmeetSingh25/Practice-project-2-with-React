import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, Navigate } from "react-router";
const Login = () => {
  // const navigate=Navigate()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const loginhandler = (user) => {
    user.id = nanoid();
    console.log(user);
    reset();
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      <form
        onSubmit={handleSubmit(loginhandler, onError)}
        className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-700 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-white text-center">Login</h2>

        <input
          {...register("username", { required: "username is required" })}
          className="px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:border-amber-400 focus:ring focus:ring-amber-500/40 outline-none text-white placeholder-gray-400"
          type="text"
          placeholder="Enter your Username"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

        {/* <input
          {...register("Email", { required: "Email is required" })}
          className="px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:border-amber-400 focus:ring focus:ring-amber-500/40 outline-none text-white placeholder-gray-400"
          type="email"
          placeholder="Enter your Email"
        />
        {errors.Email && <p className="text-red-500">{errors.Email.message}</p>} */}

        <input
          {...register("Password", {
            required: "Enter your password",
          })}
          className="px-4 py-2 rounded-md bg-transparent border border-gray-600 focus:border-amber-400 focus:ring focus:ring-amber-500/40 outline-none text-white placeholder-gray-400"
          type="password"
          placeholder="Enter your Password"
        />
{errors.Password&&<p className="text-red-500">{errors.Password.message}</p>}
        <button
          type="submit"
          className="mt-4 w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-200"
        >
          Login In
        </button>

        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link to="/register" className="text-amber-400 hover:underline">Register</Link>
            
          
        </p>
      </form>
    </div>
  );
};

export default Login;
