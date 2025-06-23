import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useDispatch } from "react-redux";
import { login } from "../auth/authReducer";

var flag = true;
const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const notify = () => {
        toast.success("Successfully logged in");
    };

    const notifyError = (msg) => {
        toast.error(msg);
    };

    const clearCookie = (cookieName) => {
        document.cookie =
            cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    };

    const userLoggedIn = (user, token) => {
        dispatch(login());
        clearCookie("user");
        clearCookie("token");
        document.cookie = `user=${user};`;
        document.cookie = `token=${token};`;
        navigate("/");
    };

    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const formDataHandler = (e) => {
        setFormData((previewData) => {
            let preview = { ...previewData };
            preview[e.target.id] = e.target.value;
            return preview;
        });
    };

    const loginHandler = () => {
        setLoading(true);
        axios
            .post("https://workshala-api.onrender.com/auth/login/", formData)
            .then((res) => {
                setLoading(false);
                userLoggedIn(res.data.username, res.data.tokens);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };
    return (
        <div className="flex justify-evenly place-items-center h-screen md:flex-col lg:flex-row">
            <button
                onClick={() => navigate("/")}
                className="bg-[#946cc5] absolute top-[2%] left-[2%] px-5 py-3 rounded-full"
            >
                {"<"}
            </button>

            {loading && (
                <div className="w-full h-[100vh] bg-white flex justify-center place-items-center opacity-75 absolute top-0 z-40">
                    <PropagateLoader
                        color={"#946cc3"}
                        loading={loading}
                        size={25}
                    />
                </div>
            )}

            <img
                src="assets/loginImage.png"
                alt="Login"
                className="min-[280px]:absolute min-[280px]:w-full min-[280px]:h-screen min-[280px]:opacity-30 min-[280px]:-z-10 md:w-[68%] md:h-fit md:static md:opacity-100 lg:w-[42%]"
            />

            <div className="min-[280px]:w-[80%] flex justify-center items-center lg:w-[32%]">
                <div className="w-full">
                    <h1 className="text-4xl font-bold pb-7">Login</h1>
                    <div className="">
                        <div className="py-3">
                            <label
                                htmlFor="email"
                                className="block text-md text-black"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                                placeholder="Enter your email"
                                onChange={formDataHandler}
                            />
                        </div>

                        <div className="py-3 relative">
                            <label
                                htmlFor="password"
                                className="block temdium text-black"
                            >
                                Password
                            </label>

                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={formDataHandler}
                                className="text-xs h-[35px] w-full pl-3 rounded-md outline outline-1 outline-black"
                                placeholder="Enter your password"
                            />
                            <span
                                onClick={togglePasswordVisibility}
                                className="cursor-pointer absolute right-2 top-[41px]"
                            >
                                {showPassword ? (
                                    <img
                                        src="assets/openEye.png"
                                        className="animate-pulse w-[24px]"
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        src="assets/closeEye.png"
                                        className="animate-pulse w-[24px]"
                                        alt=""
                                    />
                                )}
                            </span>
                            <div className="flex text-sm mt-2 flex-col">
                                <h3 className="flex text-md py-2">
                                    <input type="checkbox" className="mr-3" />
                                    Remember me
                                </h3>
                                <h3
                                    onClick={() => navigate("/reset")}
                                    className="text-blue-600 cursor-pointer text-md py-2"
                                >
                                    Forgot Password?
                                </h3>
                            </div>
                        </div>
                        <button
                            onClick={loginHandler}
                            className="w-full py-2 px-5 bg-[#946CC3] text-white text-xs rounded-md my-4"
                        >
                            Sign in
                        </button>
                        <ToastContainer />
                        <div className="flex text-sm font-bold justify-evenly">
                            <h3 className="text-center">
                                Haven't Registered Yet!
                            </h3>{" "}
                            <Link
                                to="/register"
                                className="text-purple-600 text-center"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { flag };
export default LoginPage;
