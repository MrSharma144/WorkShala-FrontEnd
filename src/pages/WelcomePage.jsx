import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authReducer";

export default function WelcomePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const [bgcolor1, setbgcolor1] = useState("white");
    const [bgcolor2, setbgcolor2] = useState("white");
    const [textcolor1, settextcolor1] = useState("black");
    const [textcolor2, settextcolor2] = useState("black");
    const workStatus = ["Not Available", "Available"];
    let skills = [];

    let c = true;
    useEffect(() => {
        if (c) {
            toast.success("Successfully Registered, Please Verify Your Email");
        }
        c = false;
    }, []);

    const workHandler = () => {
        setbgcolor1(bgcolor1 == "#94655C" ? "white" : "#94655C");
        setbgcolor2(bgcolor1 == "white" ? "white" : "#94655C");
        settextcolor1(textcolor1 == "black" ? "white" : "black");
        settextcolor2(textcolor1 == "white" ? "white" : "black");
    };

    const skillsHandler = (value) => {
        value.target.className = value.target.className.replace(
            value.target.className.includes("#d1c2e4") ? "#d1c2e4" : "#ac6dff",
            value.target.className.includes("#ac6dff") ? "#d1c2e4" : "#ac6dff"
        );
        if (skills.includes(value.target.innerHTML)) {
            skills = skills.filter((skill) => skill !== value.target.innerHTML);
        } else {
            skills.push(value.target.innerHTML);
        }
    };

    const submitHandler = () => {
        console.log(skills);
        const updateOptions = {
            method: "PUT",
            url: `https://workshala-api.onrender.com/auth/profiles/${
                document.cookie.split(";")[0].split("=")[1]
            }/`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                fullname: `${document.cookie.split(";")[0].split("=")[1]}`,
                bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora doloribus at atque officia facilis similique sint soluta voluptatibus eveniet, harum dolores enim magni minus eos corrupti. Voluptatum vel et ea nemo asperiores quisquam quam voluptate, distinctio, adipisci animi molestiae tempore iste est quis. Reprehenderit enim harum dolorem doloribus. Atque sapiente repellendus soluta repellat eum ex reprehenderit commodi libero provident. Cum temporibus at consequuntur voluptatem soluta sapiente sed, possimus optio explicabo, sint asperiores eveniet quas quae alias harum repellat ipsam unde!",
                phone_number: "8810321161",
                address: "string",
                skills: `${skills}`,
                experience: "string",
                user: location.state.user_id,
            },
        };

        axios
            .request(updateOptions)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (err) {
                console.log(err);
            });
        dispatch(logout());
        navigate("/login");
    };

    return (
        <>
            <NavBar />
            <ToastContainer />
            <div className="flex bg-rose-50 min-[280px]:flex-col md:flex-row ">
                <div className="mt-1 bg-rose-50 min-[280px]:flex min-[280px]:justify-center min-[280px]:place-items-center lg:place-items-start lg:mt-[38px]">
                    <img
                        className="pt-1 pb-1 mt-12 ml-6 min-[280px]:w-[200px] min-[280px]:m-0 lg:w-[400px]"
                        src="assets/welcomeImg.png"
                        alt=""
                    />
                </div>
                <div className="ml-48 mt-12 bg-white rounded-lg pl-8 pb-8 min-[280px]:ml-8 md:ml-8 min-[280px]:w-[84%]">
                    <h1 className="text-3xl font-bold mt-4">Welcome</h1>
                    <div className="mt-4 rounded-xl bg-rose-50 p-1 w-fit pr-24 pl-8 min-[280px]:text-xs  min-[280px]:max-w-[88%] min-[280px]:p-4">
                        <p>
                            Your account is created Successfully. Let's get
                            started
                        </p>
                    </div>
                    <h3 className="mt-8 ml-6 text-lg font-semibold min-[280px]:m-0 min-[280px]:w-[200px] min-[280px]:mt-4">
                        Work Status
                    </h3>
                    <div
                        onClick={workHandler}
                        className="flex flex-wrap ml-6 mt-8 justify-evenly min-[280px]:m-0"
                    >
                        <div
                            className={`outline outline-1 outline-black w-fit pl-5 pt-4 pb-4 pr-20 rounded-xl min-[280px]:p-7 min-[280px]:w-[160px] lg:w-[200px] flex flex-col justify-center place-items-center cursor-pointer`}
                            style={{
                                backgroundColor: `${bgcolor1}`,
                                color: `${textcolor1}`,
                            }}
                        >
                            <h3 className="text-xl font-semibold min-[280px]:text-base">
                                I'm Experienced
                            </h3>
                            <p className="mt-2">
                                I have work experience <br />
                                (Excluding Internships)
                            </p>
                        </div>

                        <div
                            onClick={workHandler}
                            className={`outline outline-1 outline-black w-fit ml-16 pl-5 pt-4 pb-4 pr-16 rounded-lg min-[280px]:mt-2 md:pt-2 min-[280px]:m-0 md:ml-8 min-[280px]:p-7 min-[280px]:w-[160px] lg:w-[200px] flex flex-col justify-center place-items-center cursor-pointer`}
                            style={{
                                backgroundColor: `${bgcolor2}`,
                                color: `${textcolor2}`,
                            }}
                        >
                            <h3 className="text-xl font-semibold">
                                I'm Fresher
                            </h3>
                            <p className="mt-2">
                                I am a student <br />
                                Haven't worked after Graduation
                            </p>
                        </div>
                    </div>
                    <h3 className="mt-8 ml-6 text-lg font-semibold">
                        Your Skills
                    </h3>
                    <div className="flex min-[280px]:flex-col md:flex-row">
                        <ul className="flex-col">
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit pl-16 pr-16 pt-1 pb-1 rounded-lg cursor-pointer min-[280px]:pl-8 "
                            >
                                Blockchain
                            </li>
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit pl-8 pr-8 pt-1 pb-1 rounded-lg cursor-pointer mt-4"
                            >
                                Design
                            </li>
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit pl-8 pr-8 pt-1 pb-1 rounded-lg cursor-pointer mt-4"
                            >
                                Marketing
                            </li>
                        </ul>
                        <ul className="flex-col ml-8 min-[280px]:mt-4 min-[280px]:ml-1 md:mt-0">
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit pl-16 pr-16 pt-1 pb-1 rounded-lg cursor-pointer min-[280px]:pl-8"
                            >
                                Architecture
                            </li>
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit  pl-8 pr-8 pt-1 pb-1 rounded-lg cursor-pointer mt-4"
                            >
                                IT and Software
                            </li>
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit pl-8 pr-8 pt-1 pb-1 rounded-lg cursor-pointer mt-4"
                            >
                                Writing
                            </li>
                        </ul>
                        <ul className="flex-col ml-8 min-[280px]:mt-4 min-[280px]:ml-1 md:mt-0">
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit pl-8 pr-16 pt-1 pb-1 rounded-lg cursor-pointer"
                            >
                                Javascript
                            </li>
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit pl-8 pr-8 pt-1 pb-1 rounded-lg cursor-pointer mt-4"
                            >
                                Database
                            </li>
                            <li
                                onClick={skillsHandler}
                                className="flex text-black bg-[#d1c2e4] w-fit mt-4 pl-5 pr-6 pt-1 pb-1 rounded-lg cursor-pointer min-[280px]:pl-8"
                            >
                                Web development
                            </li>
                        </ul>
                    </div>
                    <button
                        // onClick={() => navigate("/")}
                        onClick={submitHandler}
                        className=" text-black bg-white outline outline-purple-600 outline-1 w-fit pl-16 pr-20 rounded-md mt-8 font-semibold hover:bg-purple-900 hover:text-white"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}
