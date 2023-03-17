import React from "react";
import logo from "../../assets/Logo.png";

const Success = () => {
    return (
        <div className=" h-screen flex justify-center items-center flex-col gap-3">
            <img src={logo} alt="" />
            <h4 className="font-bold text-custom-blue">Success!</h4>
        </div>
    );
};

export default Success;
