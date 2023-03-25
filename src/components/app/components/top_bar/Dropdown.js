import React, {useContext, useEffect, useState} from "react";
import {getMonth} from "../../../data_management/pullData";

export default function Dropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [touch, setTouch] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(
    new Date().getFullYear().toString()
  );
  const [data, setData] = useState([]);

  const getDataFromGoogle = async () => {
    const response = await getMonth(
      localStorage.getItem("sheet_id"),
      localStorage.getItem("sheet_name"),
      localStorage.getItem("month"),
      localStorage.getItem("year")
    );
    setData(response.range);
    console.log(response.range);
  };

  useEffect(() => {
    getDataFromGoogle();
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0].id !== "dropDown") {
        setDropdownOpen(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  });

  const selections = data.map((year) => {
    if (year != dropdownValue) {
      return (
        <div
          onClick={() => {
            setDropdownValue(year);
            localStorage.setItem("year", year);
            setDropdownOpen(false);
          }}
          className={`
              flex 
             bg-my_soft_cream
             hover:bg-my_green 
              text-my_soft_black
              hover:text-my_soft_cream 
              border-2
              border-my_soft_black
              w-20 
              h-14 
              font-medium 
              hover:font-bold 
              rounded-md
              justify-center 
              items-center 
              `}
        >
          {year}
        </div>
      );
    }
  });

  return (
    <div className=" flex flex-col h-fit w-fit">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        id="dropDown"
        className="
        flex 
        flex-col 
        place-content-center 
         bg-my_soft_cream
        hover:bg-my_green 
        w-24 
        h-16 
        rounded-lg 
        font-bold 
        hover:text-md 
        duration-100 
        transition ease-out  
        hover:-translate-y-1
        hover:scale-10
        text-my_soft_black
        border-2
        border-my_soft_black
        shadow-2xl"
      >
        {dropdownValue}
      </div>
      {dropdownOpen ? (
        <div
          className="
        flex 
        flex-col 
        justify-center 
        items-center 
       bg-my_soft_cream
        border-2
        border-my_soft_black
        w-24 
        h-fit 
        rounded-lg 
        mt-2 
        gap-2 
        p-2"
        >
          {selections}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
