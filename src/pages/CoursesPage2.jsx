import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import CoursesCard from "../components/CoursesCard";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function CoursesPage2() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const courses = location.state.course;
    return (
        <>
            <NavBar link="../../" />

            <div className="bg-rose-50 p-6">
                <h2 className="ml-10 text-xl font-bold min-[280px]:text-xl">
                    Courses for you
                </h2>
            </div>

            <div className="flex flex-wrap justify-evenly pb-20">
                {courses.map((element, id) => (
                    <CoursesCard
                        link={location.state.link}
                        title={element}
                        key={id}
                    />
                ))}
            </div>

            <Footer link="../../" />
        </>
    );
}
