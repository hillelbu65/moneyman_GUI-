import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AppTypeContext} from "../../context/AppTypeContext";
import Selection from "./Selection";

export default function SelectionsPage() {
  const [appTypeContext, setAppTypeContext] = useContext(AppTypeContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full h-full gap-2 p-2 justify-center">
      <div className="flex flex-col items-center w-full h-full text-xl font-semibold">
        <div> ? באיזו פלטפומה אתם משתמשים</div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="flex flex-row gap-3">
            <Selection name1={"כספיון"} name2={"maneyman"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center w-full h-2/4">
        {appTypeContext !== "" ? (
          <button
            className="p-3 bg-my_green text-my_soft_black rounded-md font-semibold w-fit h-fit"
            onClick={() => navigate("/login")}
          >
            התחבר
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
