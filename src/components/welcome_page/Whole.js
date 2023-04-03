import React, {useEffect} from "react";
import Background from "./animations/Background";
import WelcomePage from "./WelcomePage";
import {useNavigate} from "react-router-dom";

export default function Whole() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("apptype"));
    if (localStorage.getItem("apptype") !== null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <WelcomePage />
      <Background />
    </div>
  );
}
