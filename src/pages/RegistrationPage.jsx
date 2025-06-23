import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../auth/authReducer";

export default function RegistrationPage() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // let allProfiles;
    // let userIds = [];
    const [uniqueId, setUniqueId] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const notify = () => {
        toast.success("Registration Success");
    };

    const notifyError = (msg) => {
        toast.error(msg);
    };

    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        password: "",
    });

    const options = {
        method: "POST",
        url: "https://workshala-api.onrender.com/auth/register/",
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            email: formData.email.trim(),
            username: formData.name.trim(),
            password: formData.password,
        },
    };

    const userLoggedIn = async (id) => {
        const profileOptions = {
            method: "POST",
            url: "https://workshala-api.onrender.com/auth/profiles/",
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                fullname: formData.name,
                bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consequuntur maxime harum. Sed aliquam, fuga soluta rerum quisquam officia et iusto porro tempore perferendis, suscipit hic ipsam! Libero minima reprehenderit iste perferendis. Aliquam aliquid doloremque dolor quae in. Autem excepturi eius laboriosam voluptate dolores alias quis ducimus asperiores fugiat amet, saepe tempora impedit a odit repudiandae est quam? Possimus, suscipit? Facere quis vel quasi minima hic excepturi dolorum? Commodi ducimus ad et incidunt ut, facere quis. Libero possimus quae laudantium?",
                phone_number: formData.phoneNumber,
                address: "",
                skills: "",
                experience: "",
                user: id,
            },
        };
        try {
            axios
                .request(profileOptions)
                .then(function (response) {
                    console.log("Created profile");
                    document.cookie = `user=${response.data.fullname};`;
                })
                .catch(function (error) {
                    console.log(error);
                });
            dispatch(login());
            navigate("/welcome", { state: { user_id: id } });
        } catch (error) {
            console.log(error);
        }
    };

    const formDataHandler = (e) => {
        setFormData((previewData) => {
            let preview = { ...previewData };
            preview[e.target.id] = e.target.value;
            return preview;
        });
    };

    const submitHandler = () => {
        if (formData.name.trim().length < 2) {
            notifyError("Username must be at least 2 characters");
            return;
        }
        if (!formData.name.match(/^[0-9a-zA-Z]+$/)) {
            notifyError("Username can only contain letters and numbers");
            return;
        }
        if (!formData.email.includes("@")) {
            notifyError("Not a valid email address");
            return;
        }
        if (formData.password.length < 6) {
            notifyError("Password must be at least 6 characters");
            return;
        }
        if (
            !formData.phoneNumber.match(
                /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
            )
        ) {
            notifyError("Invalid Phone Number");
            return;
        }
        if (formData.phoneNumber.length < 10) {
            notifyError("Invalid Phone Number");
            return;
        }
        setLoading(true);
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setLoading(false);
                notify();
                // document.cookie = `user=${formData.name};`;
                userLoggedIn(response.data.id);
            })
            .catch(function (error) {
                // console.log(error);
                try {
                    if (
                        error.response.data.email ==
                        "user with this email already exists."
                    ) {
                        notifyError("User with this email already exists");
                        setLoading(false);
                    }
                    if (
                        error.response.data.username ==
                        "user with this username already exists."
                    ) {
                        notifyError("User with this username already exists");
                        setLoading(false);
                    }
                } catch (e) {
                    // console.log(e);
                    notifyError("Error! Try again");
                    setLoading(false);
                }
            });
    };

    return (
        <div className="flex place-items-center justify-evenly h-[100vh] m-auto">
            {loading && (
                <div className="w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0">
                    <PropagateLoader
                        color={"#946cc3"}
                        loading={loading}
                        size={25}
                    />
                </div>
            )}
            <button
                onClick={() => navigate("/")}
                className="bg-[#946cc5] absolute top-[2%] left-[2%] px-5 py-3 rounded-full"
            >
                {"<"}
            </button>
            <div className="top-0 -z-10  w-[42%] min-[280px]:absolute opacity-70 min-[280px]:w-full min-[280px]:h-[100vh] md:static md:w-[48%]">
                <img
                    className="min-[280px]:w-full min-[280px]:h-full"
                    src="assets/regPageImage.png"
                    alt=""
                />
            </div>
            <div className="w-[28%] min-[280px]:w-[80%] md:w-[28%]">
                <h1 className="text-4xl font-bold pb-7">Register</h1>

                <div className="py-3 flex flex-col w-full">
                    <label htmlFor="name">Name</label>
                    <input
                        className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                        type="text"
                        id="name"
                        onChange={formDataHandler}
                        placeholder="Enter your Name"
                    />
                </div>
                <div className="py-3 flex flex-col w-full">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                        type="tel"
                        id="phoneNumber"
                        onChange={formDataHandler}
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="py-3 flex flex-col w-full">
                    <label htmlFor="email">Email</label>
                    <input
                        className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                        type="email"
                        id="email"
                        onChange={formDataHandler}
                        placeholder="Enter your Email"
                    />
                </div>
                <div className="py-3 flex flex-col w-full">
                    <label htmlFor="password">Password</label>
                    <input
                        className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        onChange={formDataHandler}
                        placeholder="Enter your password"
                    />
                    <span
                        onClick={togglePasswordVisibility}
                        className="cursor-pointer absolute right-2"
                    >
                        {showPassword ? (
                            <img
                                src="assets/openEye.png"
                                className="animate-pulse w-[24px] mr-28 mt-8"
                                alt="eye"
                            />
                        ) : (
                            <img
                                src="assets/closeEye.png"
                                className="animate-pulse w-[24px] mr-28 mt-8"
                                alt=""
                            />
                        )}
                    </span>
                </div>
                <button
                    onClick={submitHandler}
                    className="py-2 px-5 bg-[#946CC3] text-white text-xs w-full rounded-md mt-10"
                >
                    Sign Up
                </button>
                <div className="flex justify-center mt-3">
                    <h3 className="font-bold">Already Registered!</h3>{" "}
                    <Link to="/login" className="text-[#946CC3]">
                        Login
                    </Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}
