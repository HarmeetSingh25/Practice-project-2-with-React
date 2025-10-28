import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { asyncedituserinfo } from "../../Store/Useractions/useraction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const EditUserInfo = () => {
    const dispatch=useDispatch()
    const naviagte=useNavigate()
    const user = useSelector(state => state?.user?.user);
    const id = user?.id
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            Profileimg: "",
            email: "",
            name: "",
        }
    })
    const imagePreview = watch("Profileimg", user?.Profileimg);
    console.log(imagePreview);

    const UserInfohandler = (info) => {
        const updateuserinfo = { ...user, ...info }
        // console.log(Edituserinfo);
        dispatch(asyncedituserinfo(updateuserinfo,id))
        toast.success("User info update")
        naviagte("/setting")

    }
    // update default values whenever user changes
    useEffect(() => {
        if (user) {
            reset({
                Profileimg: user?.Profileimg,
                email: user?.email,
                name: user?.name,
            })
        }
    }, [user, reset])





    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
            <form
                onSubmit={handleSubmit(UserInfohandler)}
                className="max-w-lg w-full bg-gray-800 rounded-2xl p-8 shadow-lg space-y-6"
            >
                <h1 className="text-2xl font-bold text-center text-amber-400">
                    Update Info
                </h1>

                {/* Profile Image Preview */}
                {imagePreview && (
                    <div className="flex justify-center">
                        <img
                            src={imagePreview}
                            alt="Profile Preview"
                            className="w-32 h-32 object-cover rounded-full border-4 border-gray-700 shadow-md"
                        />
                    </div>
                )}

                {/* Profile Image Input */}
                <div>
                    <label className="block text-gray-300 mb-2">Profile Image URL</label>
                    <input
                        {...register("Profileimg", { required: "Profile image is required" })}
                        type="url"
                        // onChange={handleImagePreview}
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    {errors.Profileimg && (
                        <p className="text-red-400 text-sm mt-1">{errors.Profileimg.message}</p>
                    )}
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                {/* Name Input */}
                <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    // type="submit"
                    className="w-full bg-amber-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-amber-500 transition"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );

};

export default EditUserInfo;
