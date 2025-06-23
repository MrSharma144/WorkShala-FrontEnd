import React from "react";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfilePage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullname: "",
        bio: "",
        phno: "",
        address: "",
        experience: "",
    });

    const formDataHandler = (e) => {
        setFormData((previewData) => {
            let preview = { ...previewData };
            preview[e.target.id] = e.target.value;
            return preview;
        });
    };

    const editHandler = () => {
        null;
        navigate("/profile", { state: { data: formData } });
    };

    return (
        <>
            <NavBar link="../../" />
            <div className="flex w-full md:justify-evenly mt-10 min-[280px]:flex-col min-[280px]:place-items-center md:place-items-start md:flex-row">
                <div className="flex flex-col md:w-[30%] min-[280px]:w-[85%]">
                    <h1 className="font-bold text-3xl mb-4 text-[#9465cc]">
                        Edit Profile
                    </h1>
                    <input
                        onChange={formDataHandler}
                        type="text"
                        id="fullname"
                        maxLength={20}
                        className="my-2 p-2 text-xs rounded-lg shadow-lg outline outline-1 outline-[#9465CC]"
                        placeholder="Enter Your Full Name"
                    />
                    <textarea
                        onChange={formDataHandler}
                        cols="4"
                        rows="5"
                        id="bio"
                        className="my-2 p-2 text-xs rounded-lg shadow-lg outline outline-1 outline-[#9465CC]"
                        maxLength={80}
                        placeholder="Enter Your Bio (Max 80 words)"
                    />
                    <input
                        onChange={formDataHandler}
                        type="tel"
                        id="phno"
                        className="my-2 p-2 text-xs rounded-lg shadow-lg outline outline-1 outline-[#9465CC]"
                        placeholder="Enter Your Phone Number"
                    />
                    <textarea
                        onChange={formDataHandler}
                        cols="4"
                        rows="5"
                        id="address"
                        className="my-2 p-2 text-xs rounded-lg shadow-lg outline outline-1 outline-[#9465CC]"
                        placeholder="Enter Your Address"
                    />
                    <input
                        onChange={formDataHandler}
                        type="text"
                        id="experience"
                        className="my-2 p-2 text-xs rounded-lg shadow-lg outline outline-1 outline-[#9465CC]"
                        placeholder="Enter Your Experience"
                    />
                    <button
                        className="bg-[#9465CC] py-1 mt-5 text-white rounded-md hover:bg-[#44246b]"
                        onClick={editHandler}
                    >
                        Save
                    </button>
                </div>
                <div className="md:w-[30%] min-[280px]:w-[85%] min-[280px]:my-10 outline outline-1 outline-black rounded-2xl shadow-2xl">
                    <h2 className="my-6 ml-6">
                        <span className="font-semibold text-[#9465CC]">
                            Name :
                        </span>{" "}
                        {formData.fullname}
                    </h2>
                    <h2 className="my-6 ml-6">
                        <span className="font-semibold text-[#9465CC]">
                            Bio :
                        </span>{" "}
                        {formData.bio}
                    </h2>
                    <h2 className="my-6 ml-6">
                        <span className="font-semibold text-[#9465CC]">
                            Phone No :
                        </span>{" "}
                        +91-
                        {formData.phno}
                    </h2>
                    <h2 className="my-6 ml-6">
                        <span className="font-semibold text-[#9465CC]">
                            Address :
                        </span>{" "}
                        {formData.address}
                    </h2>
                    <h2 className="my-6 ml-6">
                        <span className="font-semibold text-[#9465CC]">
                            Experience :
                        </span>{" "}
                        {formData.experience}
                    </h2>
                </div>
            </div>
        </>
    );
}
