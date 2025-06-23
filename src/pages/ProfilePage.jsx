import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import { useDispatch } from "react-redux";
import { logout } from "../auth/authReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("----");
    const [bio, setBio] = useState("----");

    const clearCookie = (cookieName) => {
        document.cookie =
            cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    };

    try {
        console.log(location.state.data);
    } catch (e) {
        null;
    }

    const name = document.cookie.split(";")[0].split("=")[1];

    const getProfile = async () => {
        try {
            const response = await axios.get(
                `https://workshala-api.onrender.com/auth/profiles/${name}/`
            );
            // console.log(response);
            setUsername(response.data.fullname);
            setBio(response.data.bio);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);

    return (
        <>
            <NavBar />
            <div className="flex items-center justify-between bg-purple-500/25 p-2 rounded-lg ml-4 mr-4 min-[280px]:flex-col md:flex-row">
                <div className="flex items-center min-[280px]:flex-col md:flex-row">
                    <img
                        src="assets/profileImage.png"
                        alt="Profile"
                        className="w-30 h-30"
                    />
                    <div className="pl-4">
                        <h1 className="text-lg font-semibold">{username}</h1>
                        <p className="text-sm text-gray-600">
                            UI/UX Designer, Web Developer <br /> Ajay Kumar Garg
                            Engineering College
                        </p>
                    </div>
                </div>

                <div className="flex items-center min-[280px]:flex-col md:flex-row">
                    <button
                        onClick={() => navigate("/profile/edit")}
                        className="bg-[#9465CC] hover:bg-[#532c84] text-white py-2 rounded-lg min-[280px]:w-[120px] min-[280px]:mt-3 md:m-0"
                    >
                        Edit
                    </button>
                    <button className="bg-[#9465CC] hover:bg-[#532c84] text-white py-2 md:mx-4 md:m-0 rounded-lg min-[280px]:w-[120px] min-[280px]:m-3">
                        Your Resume
                    </button>
                </div>
            </div>
            <div className="mt-16 ml-4 mr-4 outline outline-purple-500 outline-1 rounded-lg">
                <h1 className="text-lg font-semibold pl-8 pt-4 pb-4">
                    Your Details
                </h1>
                <p className="w-[90%] text-justify m-auto pb-6 text-xs">
                    {bio}
                </p>
            </div>
            <button
                onClick={() => {
                    dispatch(logout());
                    clearCookie("user");
                    clearCookie("token");
                    navigate("/");
                }}
                className="p-2 my-10 ml-10 rounded-md outline outline-1 outline-black bg-white text-black w-[190px] hover:bg-[#946cc5] hover:text-white"
            >
                Log out
            </button>
        </>
    );
}
