import React from "react";

export default function Categoriescard(props) {
    return (
        <div
            className="bg-[#00000040] rounded-lg outline outline-black/25 outline-1 flex flex-col justify-center place-items-center cursor-pointer hover:bg-[#FF5E6E] min-[280px]:mt-4 md:w-[230px] shadow-lg min-[280px]:w-[200px] relative"
            onClick={props.onClick}
        >
            <img className="pt-8 pb-1" src="assets/ellipseImg.png" alt="" />
            <h2 className="font-bold text-lg absolute w-full h-full flex justify-center place-items-center">
                {props.title}
            </h2>
            <p className="pb-12 text-center text-xs w-[60%] pt-12">
                There are 90 courses available for this Domain
            </p>
        </div>
    );
}
