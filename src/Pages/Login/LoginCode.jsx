import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Subtract.png";
import LoginSlider from "../../Components/Slider/LoginSlider";
import SliderHelper from "../../Components/Slider/SliderHelper";

const LoginCode = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className=" lg:max-w-5xl mx-auto px-5">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="" className="mt-10" />
                </Link>
                <h3 className="text-base font-medium lg:hidden">
                    Not member?{" "}
                    <Link to="/" className="text-custom-blue">
                        Create account
                    </Link>
                </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
                <div className="md:w-96 mx-auto mt-10 md:mt-48 lg:mt-0">
                    <h2 className="font-inter text-3xlm text-custom-black font-bold mb-10">
                        Enter the verification <br />
                        code to continue
                    </h2>
                    <p className=" text-[#7A7A85]">
                        We sent to{" "}
                        <span className=" text-custom-blue font-medium">
                            hellouser@heads.design
                        </span>
                        . If you <br />
                        don’t see it, check your spam.
                    </p>
                    <div className="flex gap-5 pt-10">
                        <input
                            type="text"
                            name=""
                            id=""
                            className=" outline-none shadow-sm border border-custom-blue focus:shadow-md focus:shadow-blue-600 rounded-xl text-center w-10 h-12"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className=" outline-none shadow-sm border border-custom-blue focus:shadow-md focus:shadow-blue-600 rounded-xl text-center w-10 h-12"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className=" outline-none shadow-sm border border-custom-blue focus:shadow-md focus:shadow-blue-600 rounded-xl text-center w-10 h-12"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className=" outline-none shadow-sm border border-custom-blue focus:shadow-md focus:shadow-blue-600 rounded-xl text-center w-10 h-12"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className=" outline-none shadow-sm border border-custom-blue focus:shadow-md focus:shadow-blue-600 rounded-xl text-center w-10 h-12"
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            className=" outline-none shadow-sm border border-custom-blue focus:shadow-md focus:shadow-blue-600 rounded-xl text-center w-10 h-12"
                        />
                    </div>
                    <div className="pt-10 flex justify-between items-center">
                        <span className="font-bold text-custom-blue">Back</span>
                        <span className="font-bold text-[#CACACE]">
                            Resend 00:10
                        </span>
                    </div>
                </div>
                <div className=" hidden lg:block">
                    <LoginSlider />
                </div>
            </div>
            <h3 className="text-base font-medium hidden lg:block">
                Not member?{" "}
                <Link to="/" className="text-custom-blue">
                    Create account
                </Link>
            </h3>
        </div>
    );
};

export default LoginCode;
