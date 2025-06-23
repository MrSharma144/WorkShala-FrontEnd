import React from "react";

export default function CompaniesCard2(props) {
    return (
        <div className="pt-10 w-[300px] mb-10 rounded-lg outline outline-purple-600 outline-1 mx-3 pb-5 flex flex-col justify-center place-items-center">
            <img className="w-14" src="assets/companyLogo1.png" alt="" />
            <div className="rounded-lg px-6 py-2 my-8 mx-5 bg-pink-200 flex flex-col justify-center items-center">
                <h3 className="min-[280px]:text-xs text-center font-semibold">
                    {props.items.Company}
                </h3>
                <h3 className="min-[280px]:text-xs text-gray-500">
                    3.3 | 1k Reviews
                </h3>
            </div>
            <h2 className="text-3xl font-extrabold min-[280px]:text-lg w-[70%] text-center">
                {props.items.Company}
            </h2>
            <p className="text-center w-[60%] min-[280px]:text-xs">
                <span className="font-semibold">Internship: </span>{" "}
                {props.items.Internship}
                <br />
                <span className="font-semibold">Start: </span>{" "}
                {props.items.Start}
                <br />
                <span className="font-semibold">Stipend: </span>{" "}
                {props.items.Stipend}
                <br />
                <span className="font-semibold">Location: </span>{" "}
                {props.items.Location}
                <br />
            </p>
            <button className="bg-purple-700 mt-10 text-white py-2 px-12 rounded-lg hover:bg-purple-900 min-[280px]:px-2 min-[280px]:text-xs">
                View Jobs
            </button>
        </div>
    );
}
