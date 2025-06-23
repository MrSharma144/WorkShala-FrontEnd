import React from "react";
import NavBar from "../components/NavBar";
import { JobCard } from "../components/JobCard";
import Footer from "../components/Footer";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

export const JobsPage = () => {
    const [internships, setInternships] = useState(["Fund"]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const getDataJobCard = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                "https://workshala-api.onrender.com/intern/internships/"
            );
            setInternships(response.data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    const viewDetails = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        getDataJobCard();
    }, []);

    return (
        <>
            <NavBar />
            {loading && (
                <div className="w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0 z-40">
                    <PropagateLoader
                        color={"#946cc3"}
                        loading={loading}
                        size={25}
                    />
                </div>
            )}
            {/* Title */}
            <div className="bg-[#FFF6F9] py-7 font-bold pl-12">
                <h2>Jobs For You</h2>
            </div>
            {/* Title ends*/}

            {/* Job Card holder */}
            <div className="flex flex-wrap justify-center">
                {internships.map((element, id) => (
                    <JobCard item={element} key={id} />
                ))}
            </div>

            {/* Job Card holder ends*/}

            {isOpen && (
                <div className="w-full h-[400px] flex flex-col place-items-center bg-gray-300 shadow-sm rounded-3xl sticky z-40 bottom-0">
                    <img
                        onClick={viewDetails}
                        className="w-[50px] mt-6"
                        src="assets/downButton.png"
                        alt=""
                    />
                </div>
                // </div>
            )}
            <Footer />
        </>
    );
};
