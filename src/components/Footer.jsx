import React from "react";

export default function Footer(props) {
    return (
        <div className="min-[280px]:flex min-[280px]:flex-col min-[280px]:justify-center">
            <div className="bg-[#946CC3] outline outline-1 outline-black flex justify-between place-items-center pb-12 min-[280px]:flex-col lg:flex-row lg:justify-evenly">
                <div className="lg:ml-10 mt-7 min-[280px]:pt-10">
                    <h2 className="font-bold">Important Links</h2>
                    <div className="flex mt-5 min-[280px]:flex-col min-[425px]:flex-row">
                        <ul className="pr-6 min-[280px]:p-0  min-[425px]:px-2">
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                About Us
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Careers
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Employers Home
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Sitemap
                            </li>
                        </ul>
                        <ul className="pr-6 min-[280px]:p-0  min-[425px]:px-2">
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Help Center
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Summons/Notices
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Grievances
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Report issue
                            </li>
                        </ul>
                        <ul className="pr-6 min-[280px]:p-0  min-[425px]:px-2">
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Privacy Policy
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Terms & Conditions
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Fraud Alerts
                            </li>
                            <li className="text-sm font-bold text-gray-700 pb-3">
                                Trust & Safety
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-[40%] mt-10 min-[280px]:w-[100%] md:w-[60%] lg:w-[50%]">
                    <h2 className="font-bold min-[280px]:text-center">
                        E-mail your Query
                    </h2>
                    <div className="min-[280px]:flex min-[280px]:justify-center">
                        <input
                            id="query"
                            type="text"
                            className="bg-[#DEC1FF]"
                        />
                        <button className="bg-[#FF5E6E1A] text-white text-sm font-light py-[6px] px-5 rounded-lg">
                            Sign up
                        </button>
                    </div>
                    <div className="bg-[#DEC1FF] h-fit w-[77%] rounded-xl mt-4 px-4 py-3 min-[280px]:m-auto min-[280px]:mt-5">
                        <h2 className="font-bold text-2xl">Apply on the go</h2>
                        <h3 className="text-[#946CC3]">
                            Get real-time job updates on our App
                        </h3>
                        <div className="flex justify-center place-items-center">
                            <img
                                className="w-[50%]"
                                src={`${props.link}assets/googleplay.png`}
                                alt=""
                            />
                            <img
                                className="w-[60%]"
                                src={`${props.link}assets/appstore.png`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#251636] flex justify-between py-6 pl-8 min-[280px]:flex-col md:flex-row">
                <img
                    className="w-[170px]"
                    src={`${props.link}assets/mainLogo.png`}
                    alt=""
                />
                <div>
                    <h2 className="text-gray-500 min-[280px]:text-sm">
                        Join with us
                    </h2>
                    <div className="flex">
                        <img
                            className="pr-4"
                            src={`${props.link}assets/instagramLogo.png`}
                            alt=""
                        />
                        <img
                            className="px-4"
                            src={`${props.link}assets/twitterLogo.png`}
                            alt=""
                        />
                        <img
                            className="px-4"
                            src={`${props.link}assets/facebookLogo.png`}
                            alt=""
                        />
                        <img
                            className="px-4"
                            src={`${props.link}assets/linkedin.png`}
                            alt=""
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-gray-600 min-[280px]:text-sm">
                        Help line number
                    </h2>
                    <ul className="flex text-white justify-around md:w-[250px]">
                        <li className="list-disc min-[280px]:text-[10px]">
                            1900-2000-4992
                        </li>
                        <li className="list-disc min-[280px]:text-[10px]">
                            1900-2000-4992
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

Footer.defaultProps = {
    link: "./",
};
