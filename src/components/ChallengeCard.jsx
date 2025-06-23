import React from "react";

export default function ChallengeCard() {
    return (
        <div className="mx-5 min-w-[400px] outline outline-1 outline-purple-600 rounded-xl overflow-hidden">
            <img src="assets/challengeBanner.png" alt="" />
            <div className="flex px-6 mt-5">
                <div className="w-[50px] h-[50px] bg-[#FFE5ED] rounded-xl"></div>
                <h2 className="font-bold ml-3">
                    Beginner Contest 46 <br />
                    <span className="text-gray-400">Coding Ninjas</span>
                </h2>
            </div>
            <button className="mx-6 mt-5 px-6 py-2 text-sm outline outline-1 outline-purple-600 rounded-xl">
                Data Structures and Algorithm
            </button>
            <div className="flex px-6 mt-5 mb-10">
                <div className="flex justify-center place-items-center">
                    <img src="assets/calender.png" alt="" />
                    <h3 className="text-sm font-light ml-1">1 Nov, 9:00pm</h3>
                </div>
                <div className="flex justify-center place-items-center ml-3">
                    <img src="assets/profile.png" alt="" />
                    <h3 className="text-sm font-light ml-1">474 Enrolled</h3>
                </div>
            </div>
        </div>
    );
}
