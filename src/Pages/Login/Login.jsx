import React, { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import { RiEyeCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/Subtract.png";
import LoginSlider from "../../Components/Slider/LoginSlider";
import SliderHelper from "../../Components/Slider/SliderHelper";

const Login = () => {
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
                        Welcome to <br />
                        Systempackage
                    </h2>
                    <form>
                        <div>
                            <div className="flex justify-end gap-4 bg-custom-gray px-5 py-2 items-center rounded-xl">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    className="bg-custom-gray w-full px-3 py-3 outline-none"
                                />
                                <div className="py-3 px-5 bg-white text-mono font-medium rounded-xl">
                                    <select
                                        name="option"
                                        id="loginOption"
                                        className="outline-none"
                                    >
                                        <option value="heads">
                                            @heads.design
                                        </option>
                                        <option value="heads2">
                                            @heads.com
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-between items-center bg-custom-gray px-5 py-2 mt-8 rounded-xl">
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    className="px-3 py-3 outline-none bg-transparent"
                                />
                                <span
                                    onClick={togglePassword}
                                    className="cursor-pointer text-[16px]"
                                >
                                    {passwordShown ? (
                                        <RiEyeCloseLine />
                                    ) : (
                                        <GoEyeClosed />
                                    )}
                                </span>
                            </div>
                            <input
                                type="submit"
                                value="Next"
                                className="mt-8 bg-custom-blue font-bold text-base text-white w-full py-5 rounded-xl"
                            />
                            <div className="text-center mt-6">
                                <Link
                                    to="/"
                                    className="text-custom-blue text-base font-bold"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                    </form>
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

export default Login;
