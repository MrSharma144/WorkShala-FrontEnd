import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Categoriescard from "../components/Categoriescard";
import CategoriesTitles from "../constants/CategoriesTitles.json";
import CoursesCard from "../components/CoursesCard";
import Footer from "../components/Footer";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CoursesPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [courses, setCourses] = useState([
        "Data Analysis Using R",
        "Intermediate Python",
        "App Marketing",
        "Web Development",
        "Data Algorithms",
    ]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const loadCourses = (s = search.trim()) => {
        setLoading(true);
        let config = {
            method: "get",
            url: `https://course-api-gb35.onrender.com/recommendation_func/${s}`,
            headers: {
                "Access-Control-Allow-Origin": "http://localhost:5173",
                "Access-Control-Allow-Methods": "GET",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        };

        axios
            .request(config)
            .then((response) => {
                // console.log(response.data);
                setCourses(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    };

    const selectionHandler = (e) => {
        loadCourses(e.target.innerHTML);
        window.scrollTo(0, 0);
    };

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

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
            <header className="flex  w-5/6 ml-28 place-items-center justify-between min-[280px]:flex-col-reverse lg:flex-row lg:my-10">
                <div className="w-1/2  min-[280px]:w-5/6 lg:w-[400px]">
                    <h1 className="font-bold text-3xl my-2 mb-9 ">
                        Learn on Your{" "}
                        <span className="text-[#FF5E6E]">Sche</span>dule
                    </h1>
                    <p className="">
                        Study any topic, anytime explore thousands of courses{" "}
                        <br />
                        for the lowest price ever!
                    </p>

                    <input
                        className="text-xs h-[35px] px-10 py-4 w-full bg-[#FFFCFC] rounded-2xl shadow-lg mt-6"
                        type="text"
                        value={search}
                        onChange={searchHandler}
                        placeholder="What do you want to learn?"
                    />

                    <button
                        onClick={loadCourses}
                        className="rounded-2xl px-12 py-[10px] mt-7 bg-[#FF5E6E] text-xs text-white hover:bg-rose-500"
                    >
                        Search
                    </button>
                    
                </div>
                <div className="min-[280px]:mr-4">
                    <img className="pt-4 pb-4 ml-28 min-[280px]:ml-6" src="assets/coursesImg.png" alt="" /> 
                </div> 
            </header>

            <div className="">
                <h1 className="text-left text-xl font-bold pt-6 pl-10 pb-6">
                    Courses Categories
                </h1>
                <div className="flex justify-evenly w-full min-[280px]:flex-col min-[280px]:place-items-center md:flex-row">
                    {CategoriesTitles.map((element, id) => (
                        <Categoriescard
                            onClick={selectionHandler}
                            title={element.title}
                            key={id}
                        />
                    ))}
                </div>
                <div className="flex justify-between place-items-center w-[93%] m-auto">
                    <h1 className="text-left text-xl py-6 font-bold">
                        Courses for you
                    </h1>
                    <img
                        className="w-[50px] h-[50px] cursor-pointer"
                        src="assets/rightArrow.png"
                        alt=""
                        onClick={() =>
                            navigate("/courses/all", {
                                state: {
                                    course: courses,
                                    link: "../../",
                                },
                            })
                        }
                    />
                </div>
            </div>

            <div className="flex flex-wrap justify-evenly pt-14 pb-32">
                {courses.map((element, id) => (
                    <CoursesCard link="./" title={element} key={id} />
                ))}
            </div>

            <Footer />
        </>
    );
}
