import React from "react";

export default function CoursesCard(props) {
    return (
        <div className="md:w-[367px] mt-12 rounded-lg shadow-xl min-[280px]:w-[250px]">
            <img
                src={`${props.link}assets/rectangleImage.png`}
                alt=""
                className=" w-[366px] h-[186px] rounded-lg"
            />
            <h2 className="ml-8 mt-2 text-lg font-bold">{props.title}</h2>
            <div className="flex mt-3 place-items-center">
                <img
                    src={`${props.link}assets/patternEllipse.png`}
                    alt=""
                    className="ml-8 mr-3 w-[50px] h-[50px]"
                />
                <p className="text-xs">
                    Aman Kumar
                    <br />
                    IITian from BHU, 3year of experience
                </p>
            </div>
            <hr className="h-[1px] bg-gray-600 mt-12" />
            <div className="flex mx-6 py-3 place-items-center justify-between">
                <h2 className="text-[#0FEBE4] font-bold">FREE</h2>
                <div className="flex">
                    <div className="flex place-items-center">
                        <img
                            src={`${props.link}assets/starImage.png`}
                            alt=""
                            className="w-[15px] h-[15px]"
                        />
                        <h6 className="text-xs">3 star</h6>
                    </div>
                    <div className="flex ml-3">
                        <img
                            src={`${props.link}assets/userImage.png`}
                            alt=""
                            className=""
                        />
                        <h6 className="text-sm">321 enrolled</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

CoursesCard.defaultProps = {
    title: "Data Analysis Using R",
};
