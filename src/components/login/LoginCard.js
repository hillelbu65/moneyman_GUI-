import {useGoogleLogin} from "@react-oauth/google";
import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../utils_components/Input";
import {RiGoogleFill} from "react-icons/ri";
import {PullDataContext} from "../context/PullDataContext";
import {PromptContext} from "../context/PromptContext";
import LogoSVG from "./LogoSVG";

export default function LoginCard() {
  const [borderStyle, setBorderStyle] = useState("");

  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);

  const [prompt, setPrompt] = useContext(PromptContext);

  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      sessionStorage.setItem("token", tokenResponse.access_token);
      navigate("/monthoverview");
      setPrompt({
        type: "",
        text: "",
        state: false,
        time: 20000,
      });
    },
  });

  useEffect(() => {
    setPrompt({
      type: "info",
      text: "מטעמי אבטחת מידע, יש להתחבר עם גוגל בכל ביקור. אתם מרחק לחיצה מהמידע שלכם",
      state: true,
      time: 20000,
    });

    if (sheetName === null) {
      localStorage.setItem("sheet_name", "");
      setSheetName("");
      setBorderStyle(
        "bg-gradient-to-r from-my_pink via-my_green to-my_pink flex w-full h-full justify-center items-center p-3"
      );
    }
    if (sheetId === null) {
      localStorage.setItem("sheet_id", "");
      setSheetId("");
      setBorderStyle(
        "bg-gradient-to-r from-my_pink via-my_green to-my_pink flex w-full h-full justify-center items-center p-3"
      );
    }

    if (sheetName === "" || sheetId === "") {
      setBorderStyle(
        "bg-gradient-to-r from-my_pink via-my_green to-my_pink flex w-full h-full justify-center items-center p-3"
      );
    }
    if (sheetName !== "" && sheetId !== "") {
      setBorderStyle(
        "bg-my_green flex w-full h-full justify-center items-center p-3"
      );
    }
  }, [sheetName, sheetId]);

  return (
    <div className={borderStyle}>
      <div className="flex w-full h-full justify-center items-center p-2 rounded-md bg-my_soft_cream">
        <div className="grid grid-rows-3 justify-center sm:h-96 sm:w-96 w-11/12 h-96 rounded-md border-2 border-my_soft_black bg-my_soft_cream shadow-md ">
          <div className="flex flex-col items-center justify-center font-bold text-3xl h-full">
            <LogoSVG />
            <span>כניסה</span>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <Input name="sheet_id" header="(חובה) מזהה הגליון" />
            <Input name="sheet_name" header="(חובה) שם הגליון" />
          </div>
          <div className="flex w-full justify-center">
            <button
              className="flex items-center gap-1 h-fit bg-my_green p-3 rounded-md font-semibold"
              onClick={() => login()}
            >
              <RiGoogleFill />
              התחברות עם גוגל
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
