import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const JobCard = (props) => {
    const [view, setView] = useState(false);
    const [scrollY, setScrollY] = useState(2000);
    const user = document.cookie.split(";")[0].split("=")[1];

    const viewDetails = () => {
        setView(!view);
    };

    const notify = () => {
        toast.success(`Successfully Applied to ${props.item.internship_name}`);
    };

    const notifyError = () => {
        toast.error("Error applying to ${props.item.internship_name");
    };

    const options = {
        method: "POST",
        url: "https://workshala-api.onrender.com/intern/applications/",
        headers: {
            "Content-Type": "application/json",
        },
        data: {
            fullname: user,
            Graduation_name: "string",
            year_of_study: 2147483647,
            cover_letter: "string",
            skills: "string",
            username: 1,
            intern_id: props.item.id,
        },
    };

    const applyInternship = () => {
        axios
            .request(options)
            .then(function (response) {
                notify();
            })
            .catch(function (error) {
                console.log(error);
                notifyError();
            });
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    return (
        <div className="w-[260px] my-10 mx-2 min-[768px]:mx-10 lg:w-[300px]">
            <div className="flex justify-between place-items-center">
                <div className="lg:w-[150px]">
                    <h3 className="outline outline-1 outline-gray-500 w-fit flex place-items-center mx-2 pr-2 rounded-md min-[280px]:text-sm lg:mx-0 lg:pr-2 lg:p-[1px]">
                        <div className="w-[16px] h-[16px] rounded-full mx-1 bg-[#A2E5E3] lg:mx-1"></div>
                        Actively hiring
                    </h3>
                    <h1 className="min-[280px]:text-lg text-2xl font-bold">
                        {props.item.internship_name}
                    </h1>
                    <p className="text-gray-500 min-[280px]:text-sm">
                        Odisha Development Management Programme (ODMP)
                    </p>
                </div>
                <img src="assets/tataLogo.png" alt="" />
            </div>

            <div className="lg:flex lg:justify-between lg:mt-3">
                <ul className="lg:flex lg:flex-col">
                    <li className="flex text-gray-500 py-2 lg:text-xs">
                        <img
                            className="w-[20px] mr-2"
                            src="assets/workFromHome.png"
                            alt=""
                        />
                        Work from Home
                    </li>
                    <li className="flex text-gray-500 py-2 lg:text-xs">
                        <img
                            className="w-[20px] mr-2"
                            src="assets/backInTime.png"
                            alt=""
                        />
                        1 Week
                    </li>
                </ul>
                <ul className="lg:flex lg:flex-col">
                    <li className="flex text-gray-500 py-2 lg:text-xs">
                        <img
                            className="w-[20px] mr-2"
                            src="assets/shuttle.png"
                            alt=""
                        />
                        Starts immediately
                    </li>
                    <li className="flex text-gray-500 py-2 lg:text-xs">
                        <img
                            className="w-[20px] mr-2"
                            src="assets/salary.png"
                            alt=""
                        />
                        Rs. {props.item.stipend}/month
                    </li>
                </ul>
            </div>

            <div className="lg:flex my-4">
                <h3 className="bg-[#946CC333] w-fit rounded-md px-3 py-[1px] text-gray-600 font-semibold m-1">
                    Internship
                </h3>
                <h3 className="bg-[#946CC333] w-fit rounded-md px-3 py-[1px] text-gray-600 font-semibold m-1">
                    Part time
                </h3>
            </div>

            <div>
                <h3 className="text-blue-500">5 days ago</h3>
            </div>

            <hr className="h-[1px] bg-gray-600 my-4" />

            <a onClick={viewDetails} className="text-blue-600 cursor-pointer">
                View Details
            </a>
            {view && (
                <div
                    className="absolute left-0 h-screen w-[100%] bg-transparent"
                    style={{ top: `${scrollY}px` }}
                >
                    <div className="w-full md:h-[540px] min-[280px]:h-[600px] flex flex-col place-items-center bg-white shadow-[0_-10px_25px_-15px_rgba(0,0,0,0.3)] rounded-t-3xl sticky z-40 top-[500px]">
                        <ToastContainer />
                        <img
                            onClick={viewDetails}
                            className="w-[50px] mt-6 cursor-pointer"
                            src="assets/downButton.png"
                            alt=""
                        />
                        <div className="flex justify-between w-[90%] min-[280px]:flex-col min-[470px]:flex-row">
                            <div className="flex w-fit">
                                <img
                                    className="w-[150px] mr-5 min-[280px]:hidden sm:block"
                                    src="assets/viewDetailsLogo.png"
                                    alt=""
                                />
                                <div>
                                    <h1 className="font-bold min-[470px]:text-3xl min-[280px]:text-2xl">
                                        {props.item.internship_name}
                                    </h1>
                                    <h2 className="text-gray-600 text-xs">
                                        Start Date : {props.item.start_date}
                                    </h2>
                                    <h2 className="text-gray-600 text-xs">
                                        End Date : {props.item.end_date}
                                    </h2>
                                    <h2 className="text-gray-600 text-xs">
                                        Application Deadline :{" "}
                                        {props.item.application_deadline}
                                    </h2>
                                    <h2 className="text-gray-600 text-xs">
                                        Email : {props.item.contact_email}
                                    </h2>
                                    <h1 className="mt-4 font-semibold min-[470px]:text-lg min-[280px]:text-base">
                                        {props.item.job_title}
                                    </h1>
                                </div>
                            </div>
                            <div className="min-[280px]:mt-3 min-[280px]:text-xs min-[470px]:m-0 min-[470px]:text-lg">
                                <button
                                    onClick={applyInternship}
                                    className="outline outline-1 outline-black font-semibold px-3 py-2 mx-3 rounded-lg"
                                >
                                    Apply
                                </button>
                                <button className="outline outline-1 outline-black font-semibold px-3 py-2 mx-3 rounded-lg">
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="w-[90%] mt-5">
                            <h1 className="font-bold min-[470px]:text-2xl min-[280px]:text-base">
                                Skills
                            </h1>
                            <p className="bg-[#946CC333] px-4 p-2 rounded-lg min-[280px]:text-xs min-[470px]:text-base">
                                {props.item.requirements}
                            </p>
                        </div>
                        <div className="w-[90%] mt-5">
                            <h1 className="font-bold min-[470px]:text-2xl min-[280px]:text-base">
                                About the Job
                            </h1>
                            <p className="min-[280px]:text-xs min-[470px]:text-base">
                                {props.item.description}
                            </p>
                        </div>
                        <div className="w-[90%] mt-5">
                            <h1 className="font-bold text-lg">Stipend</h1>
                            <p className="font-md text-green-700">
                                Rs. {props.item.stipend}/month
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
