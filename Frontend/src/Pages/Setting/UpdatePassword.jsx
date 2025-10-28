import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { asynupdatepassword } from "../../Store/Useractions/useraction";
import { toast } from "react-toastify";

const UpdatePassword = () => {
    const user = useSelector((state) => state.user.user);
    const id = user?.id;
    const dispatch = useDispatch();

    const [showoldpassword, setoldpassword] = useState(false)
    const [shownewpassword, showsetnewpassword] = useState(false)
    const [showconfirmpassword, setshowconfirmpassword] = useState(false)

    const Openeyeicon = <i className="ri-eye-line"></i>
    const closeeyeicon = <i className="ri-eye-off-line"></i>
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const passwordupdatehandler = (info) => {
        dispatch(
            asynupdatepassword(
                {
                    password: info.newpassword,
                    confirmpasword: info.confirmpasword
                },
                id
            )
        );
        toast.success("Password changed")

    };

    const newPassword = watch("newpassword");

    const inputWrapperClass = "relative";


    const inputClass =
        "w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400";

    const toggleBtnClass =
        "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded focus:outline-none focus:ring-2 focus:ring-amber-400";


    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
            <form
                onSubmit={handleSubmit(passwordupdatehandler)}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
            >
                <h1 className="text-2xl font-bold text-center text-amber-400">
                    Update Password
                </h1>

                <input
                    type="email"
                    name="username"
                    autoComplete="username"
                    value={user?.email || ""}
                    hidden
                    readOnly
                />

                {/* Old Password */}
                <div>
                    <label className="block text-gray-300 mb-2">Old Password</label>
                    <div className={inputWrapperClass}>
                        <input
                            {...register("password", { required: "Old password required", validate: (val) => val === user.password || "incorrect old password" })}
                            type={showoldpassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Enter old password"
                            className={inputClass}

                        />
                        <button
                            type="button"
                            tabIndex={0}
                            aria-label={showoldpassword ? "Hide old password" : "Show old password"}
                            className={toggleBtnClass}
                            onClick={() => setoldpassword((s) => !s)}
                        >
                            {showoldpassword ? Openeyeicon : closeeyeicon}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* New Password */}
                <div >
                    <label className="block text-gray-300 mb-2">New Password</label>
                    <div className={inputWrapperClass}>

                        <input
                            {...register("newpassword", {
                                required: "New password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },

                            })}
                            type={shownewpassword ? "text" : "password"}
                            placeholder="Enter new password"
                            autoComplete="new-password"   // ✅ Added
                            className={inputClass}
                        />
                        <button
                            type="button"
                            tabIndex={0}
                            aria-label={showsetnewpassword ? "Hide old password" : "Show old password"}
                            className={toggleBtnClass}
                            onClick={() => showsetnewpassword((s) => !s)}
                        >
                            {shownewpassword ? Openeyeicon : closeeyeicon}
                        </button>
                        {errors.newpassword && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.newpassword.message}
                            </p>

                        )}
                    </div>

                </div>

                {/* Confirm Password */}
                <div>
                    <label className="block text-gray-300 mb-2">Confirm New Password</label>
                    <div className={inputWrapperClass}>

                        <input
                            {...register("confirmpasword", {
                                required: "Please confirm your password",
                                validate: (value) =>
                                    value === newPassword || "Passwords do not match",
                            })}
                            type={showconfirmpassword ? "text" : "password"}
                            placeholder="Re-enter new password"
                            autoComplete="new-password"   // ✅ Added
                            className={inputClass}
                        />
                        <button
                            type="button"
                            tabIndex={1}
                            aria-label={showconfirmpassword ? "Hide old password" : "Show old password"}
                            className={toggleBtnClass}
                            onClick={() => setshowconfirmpassword((s) => !s)}
                        >
                            {showconfirmpassword ? Openeyeicon : closeeyeicon}
                        </button>
                        {errors.confirmpasword && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.confirmpasword.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-amber-400 text-gray-900 font-semibold py-3 rounded-lg hover:bg-amber-500 transition"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default UpdatePassword;
