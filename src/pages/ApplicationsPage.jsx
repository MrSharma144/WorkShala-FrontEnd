import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function ApplicationsPage() {
    let allApplications;
    const [internships, setInternships] = useState([]);
    const user = document.cookie.split(";")[0].split("=")[1];
    const [loading, setLoading] = useState(false);

    const notify = () => {
        toast.success("Deleted Application Successfully");
    };
    const notifyError = () => {
        toast.error("Error deleting Application");
    };

    const getInternships = async (id, appli_id) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://workshala-api.onrender.com/intern/internships/${id}/`
            );
            setInternships((prev) => [
                ...prev,
                { apli_id: appli_id, ...response.data },
            ]);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    const getApplications = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                "https://workshala-api.onrender.com/intern/applications/"
            );
            allApplications = response.data;
            allApplications.forEach((element) => {
                if (element.fullname == user) {
                    setLoading(false);
                    getInternships(element.intern_id, element.id);
                }
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    const showConfirmation = (e) => {
        confirmAlert({
            title: "Deletion Alert!",
            message:
                "Confirming to this will Remove your Application from Database",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => {
                        deleteApplication(e);
                    },
                },
                {
                    label: "Cancel",
                    onClick: () => {
                        console.log("You clicked no!");
                    },
                },
            ],
        });
    };

    const deleteApplication = async (e) => {
        try {
            const response = await axios.delete(
                `https://workshala-api.onrender.com/intern/applications/${e}`
            );
            notify();
            setLoading(false);
            setInternships([]);
            getApplications();
        } catch (err) {
            notifyError(err);
        }
    };

    useEffect(() => {
        getApplications();
    }, []);

    return (
        <>
            <NavBar />
            <ToastContainer />
            {loading && (
                <div className="w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0 z-40">
                    <PropagateLoader
                        color={"#946cc3"}
                        loading={loading}
                        size={25}
                    />
                </div>
            )}
            <div className="mt-10 m-auto w-[90%] justify-center flex flex-col place-items-center">
                <h1 className="font-bold min-[280px]:text-xl  min-[425px]:text-3xl mb-8">
                    Your Applications
                </h1>
                {internships.length == 0 ? (
                    <h2 className="my-32">No Applications</h2>
                ) : (
                    internships.map((element, id) => (
                        <div
                            className="outline outline-1 outline-[#9465CC] mb-8 min-[280px]:w-[250px]  min-[425px]:w-[400px] py-3 px-10 rounded-lg shadow-2xl relative"
                            key={id}
                        >
                            <h1
                                onClick={() =>
                                    showConfirmation(element.apli_id)
                                }
                                className="absolute right-2 top-2 cursor-pointer"
                            >
                                &#10060;
                            </h1>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Internship Name :{" "}
                                </span>
                                {element.internship_name}
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Job Title :{" "}
                                </span>
                                {element.job_title}
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Start Date :{" "}
                                </span>
                                {element.start_date}
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    End Date :{" "}
                                </span>
                                {element.end_date}
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Stipend : Rs.{" "}
                                </span>
                                {element.stipend}/month
                            </h2>
                            <h2 className="min-[280px]:text-xs min-[425px]:text-base">
                                <span className="font-bold mr-2 ">
                                    Email Id :{" "}
                                </span>
                                {element.contact_email}
                            </h2>
                        </div>
                    ))
                )}
            </div>
            <Footer />
        </>
    );
}
