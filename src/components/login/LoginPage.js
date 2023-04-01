import {useGoogleLogin} from "@react-oauth/google";
import React from "react";
import {useNavigate} from "react-router-dom";
import LoginCard from "./LoginCard";
import {BiHomeAlt} from "react-icons/bi";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen bg-my_soft_cream">
      <div
        className="flex flex-row absolute bottom-16 rounded-lg text-my_soft_black hover:text-xl text-lg gap-1 font-semibold border-2 border-my_soft_black bg-my_soft_cream hover:bg-my_green p-2 h-fit w-fit "
        onClick={() => navigate("/")}
      >
        {" "}
        עמוד הבית
        <div className="">
          <BiHomeAlt size={"30"} />
        </div>
      </div>
      <LoginCard />
    </div>
  );
}
