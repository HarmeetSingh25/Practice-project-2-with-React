// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { asynclogout } from "../../Store/Useractions/useraction";
import { useNavigate } from "react-router";

const Setting = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user);

    return (
        <div className="bg-gray-900 min-h-screen py-10 px-6 text-white">
            <h1 className="text-3xl font-bold text-amber-400 mb-10 text-center">
                Settings
            </h1>

            <div className="max-w-3xl mx-auto space-y-6">
                {/* Profile Info */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Profile</h2>
                    <img src={user?.Profileimg} className="w-32 h-32 object-cover  rounded-full border-4 border-gray-700 shadow-md"
                        alt="" />
                    <p><span className="font-bold">Username:</span> {user?.name}</p>
                    <p><span className="font-bold">Email:</span> {user?.email}</p>
                    <button onClick={() => navigate("/edituserinfo")} className="mt-4 bg-amber-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-500">
                        Edit Profile
                    </button>
                </div>

                {/* Change Password */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Change Password</h2>
                    {/* <input
                        type="password"
                        placeholder="Old Password"
                        className="block w-full mb-3 p-2 rounded bg-gray-700"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        className="block w-full mb-3 p-2 rounded bg-gray-700"
                    /> */}
                    <button className="bg-amber-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-amber-500">
                        Update Password
                    </button>
                </div>

                {/* Logout */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                    <button
                        onClick={() => {
                            navigate("/login")
                            return dispatch(asynclogout())
                        }}
                        className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Setting;
