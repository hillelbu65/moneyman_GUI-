import {useGoogleLogin} from "@react-oauth/google";
import React from "react";
import {useNavigate} from "react-router-dom";
import LoginCard from "./LoginCard";

export default function LoginPage() {
  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen bg-my_soft_cream">
      <LoginCard />
    </div>
  );
}
