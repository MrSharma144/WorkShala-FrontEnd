import React from "react";
import { useNavigate } from "react-router-dom";

export default function CompaniesCard(props) {
    const navigate = useNavigate();
    return (
        <div className="pt-10 rounded-lg outline outline-purple-600 outline-1 ml-1 mr-8 pb-5 flex flex-col justify-center place-items-center min-[280px]:w-[240px] min-[280px]:px-12">
            <img className="w-14" src="assets/companyLogo1.png" alt="" />
            <div className="rounded-lg px-6 py-2 my-8 mx-5 bg-pink-200">
                <h3 className="min-[280px]:text-xs text-center">
                    3.3 | 1k Reviews
                </h3>
            </div>
            <h2 className="text-md font-extrabold min-[280px]:text-md text-center">
                {props.items.Company}
            </h2>
            <p className="text-center min-[280px]:text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <button
                onClick={() => navigate("/companies")}
                className="bg-purple-700 mt-10 text-white py-2 px-12 rounded-lg hover:bg-purple-900 min-[280px]:px-2 min-[280px]:text-xs"
            >
                View Jobs
            </button>
        </div>
    );
}
