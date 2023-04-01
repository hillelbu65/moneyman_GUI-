import React, {useContext, useEffect, useState} from "react";
import {PullDataContext} from "../../../context/PullDataContext";
import {getMonth} from "../../../data_management/pullData";

export default function Dropdown(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(
    new Date().getFullYear().toString()
  );
  const [data, setData] = useState([]);

  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);

  const getDataFromGoogle = async () => {
    const response = await getMonth(
      localStorage.getItem("sheet_id"),
      localStorage.getItem("sheet_name"),
      month,
      year
    );
    setData(response.range);
  };

  useEffect(() => {
    getDataFromGoogle();
  }, []);

  const selections = data.map((year) => {
    if (year !== dropdownValue) {
      return (
        <div
          onClick={() => {
            setDropdownValue(year);
            setYear(year);
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
