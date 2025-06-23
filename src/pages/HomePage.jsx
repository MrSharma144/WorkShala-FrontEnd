import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ServicesCard from "../components/ServicesCard";
import CompaniesCard from "../components/CompaniesCard";
import ServicesTitles from "../constants/ServicesTitles.json";
import ChallengeCard from "../components/ChallengeCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function HomePageBeforeLogin() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [internships, setInternships] = useState([]);
    const [loading, setLoading] = useState(false);

    const [desc, setDesc] = useState(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam cum eius odio dolorem natus, delectus ipsatempora eum est perferendis odit minus esse minimaconsequuntur amet! Veritatis eligendi eum libero?"
    );
    const [button, setButton] = useState("More");

    const readmoreHandler = () => {
        if (button == "More")
            setDesc(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam cum eius odio dolorem natus, delectus ipsatempora eum est perferendis odit minus esse minimaconsequuntur amet! Veritatis eligendi eum libero? Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam cum eius odio dolorem natus, delectus ipsatempora eum est perferendis odit minus esse minimaconsequuntur amet! Veritatis eligendi eum libero?"
            );
        setButton("Less");
        if (button == "Less") {
            setDesc(
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam cum eius odio dolorem natus, delectus ipsatempora eum est perferendis odit minus esse minimaconsequuntur amet! Veritatis eligendi eum libero?"
            );
            setButton("More");
        }
    };

    const getData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://workshala-api.onrender.com/auth/profiles/${
                    document.cookie.split(";")[0].split("=")[1]
                }/`
            );
            const jobs = await axios.get(
                `https://internship-api-ljib.onrender.com/internship/${response.data.skills}`
            );
            jobs.data.forEach((element) => {
                setInternships((prev) => [...prev, element]);
            });
            setLoading(false);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            return () => getData();
        }
    }, []);

    const navigate = useNavigate();
    return (
        <>
            {/* NavBar starts here */}
            <NavBar />
            {/* NavBar ends here */}
            {loading && (
                <div className="w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0 z-40">
                    <PropagateLoader
                        color={"#946cc3"}
                        loading={loading}
                        size={25}
                    />
                </div>
            )}
            {/* Hero Section starts here */}
            <header className="flex  w-5/6 m-auto place-items-center justify-between min-[280px]:flex-col-reverse lg:flex-row lg:my-10">
                {/* Left Hero Section */}
                <div className="w-1/3 min-[280px]:w-5/6 lg:w-[400px]">
                    {/* Welcome div */}
                    <div className="flex place-items-center min-[280px]:w-[100%]">
                        <img src="assets/welcomeHand.png" alt="" />
                        <h3 className="text-gray-400 text-sm font-medium min-[280px]:text-xs lg:text-base">
                            WELCOME TO WORKSHALA
                        </h3>
                    </div>
                    {/* Welcome div ends */}

                    {/* Title */}
                    <h1 className="font-bold text-4xl my-2 md:text-4xl min-[280px]:text-xl xl:text-5xl">
                        Best Place To <br />
                        Get You Placed
                    </h1>
                    {/* Title ends */}

                    {/* Desc */}
                    <p className="md:text-sm min-[280px]:text-[10px] lg:text-base">
                        {desc}
                    </p>
                    {/* Desc ends */}

                    {/* Buttons div */}
                    <div className="flex min-[280px]:justify-start">
                        <button
                            onClick={readmoreHandler}
                            className="py-2 mx-7 text-[13px] px-4 rounded my-3 bg-purple-600 text-white font-medium hover:outline hover: outline-1 hover:outline-purple-600 hover:text-purple-600 hover:bg-white md:text-[8px] min-[280px]:text-[10px] min-[280px]:px-1 md:text-sm md:px-3"
                        >
                            Read {button}
                        </button>
                        <button
                            onClick={() =>
                                isAuthenticated
                                    ? navigate("/jobs")
                                    : navigate("/login")
                            }
                            className="py-2 text-[13px] px-4 rounded mx-7 my-3 font-medium outline outline-1 outline-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white hover:outline-white md:text-[8px] min-[280px]:text-[10px] min-[280px]:px-1 min-[280px]:mx-0 md:text-sm md:px-3"
                        >
                            Start Today
                        </button>
                    </div>
                    {/* Buttons div ends */}
                </div>
                {/* Left Hero Section ends*/}

                {/* Right Hero Section ends*/}
                <div className="w-3/6 min-[280px]:w-[250px] min-[425px]:w-[400px] lg:w-[500px]">
                    {/* Hero Image */}
                    <img src="assets/heroImage.png" alt="" />
                </div>
                {/* Right Hero Section ends*/}
            </header>
            {/* Hero Section ends here */}

            {/* Services Section starts here */}
            <div className="bg-rose-50 pb-10">
                <h3 className="text-center pt-10 min-[280px]:text-xs md:text-sm">
                    Services
                </h3>
                <h1 className="text-center text-4xl font-bold md:text-3xl min-[280px]:text-2xl">
                    Our Services
                </h1>
                <div className="flex justify-evenly place-items-center mt-[100px] md:mt-[45px] min-[280px]:flex-col min-[280px]:mt-[50px] md:flex-row">
                    {ServicesTitles.map((element, id) => (
                        <ServicesCard title={element.title} key={id} />
                    ))}
                </div>
            </div>

            {/* Services Section ends here */}

            {/* Companies Section starts here */}
            <div className="overflow-hidden w-[90%] m-auto pb-20">
                <h3 className="text-center pt-10 min-[280px]:text-xs md:text-sm">
                    Companies
                </h3>
                <h1 className="text-center md:text-3xl font-bold min-[280px]:text-2xl">
                    Featured Companies Actively Hiring
                </h1>
                <div className="flex pt-12 pb-7 overflow-scroll">
                    {internships.map((internship, id) => (
                        <CompaniesCard items={internship} key={id} />
                    ))}
                </div>
                <button
                    onClick={() => navigate("/companies")}
                    className="w-1/6 text-xs bg-purple-700 mt-7  text-white py-3 px-10 rounded-lg hover:bg-purple-900 min-[280px]:text-xs min-[280px]:w-max min-[280px]:absolute min-[280px]:left-[50%] min-[280px]:translate-x-[-50%]"
                >
                    View all Companies
                </button>
            </div>
            {/* Companies Section ends here */}

            {/* Challenges Section starts here */}
            <div className="overflow-hidden bg-[#FFB2CA1F] pb-10 flex flex-col justify-center place-items-center">
                <h3 className="text-center pt-10 min-[280px]:text-xs md:text-sm">
                    Events
                </h3>
                <h1 className="text-center md:text-3xl font-bold min-[280px]:text-2xl">
                    Upcoming Events and Challenges
                </h1>
                <div className="flex pt-12 pb-12 overflow-scroll w-[90%]">
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                    <ChallengeCard />
                </div>
            </div>
            {/* Challenges Section ends here */}

            {/* Footer Section starts here */}
            <Footer />
            {/* Footer Section ends here */}
        </>
    );
}
