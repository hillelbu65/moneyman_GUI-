import React, {useContext, useState} from "react";
// import {MonthContext} from "../../../context/monthContext";

export default function MonthBar() {
  //Month context.
  // const [monthContext, setMonthContext] = useContext(MonthContext);
  const [Clicked, setClicked] = useState(localStorage.getItem("month"));
  const months = [
    "01ינו",
    "02פבו",
    "03מרץ",
    "04אפר",
    "05מאי",
    "06יונ",
    "07יול",
    "08אוג",
    "09ספט",
    "10אוק",
    "11נוב",
    "12דצמ",
  ];

  const selections = months.map((el, index) => {
    return (
      <div className="flex">
        <div
          onClick={() => {
            sessionStorage.setItem("month", el[0] + el[1]);
            setClicked(el[0] + el[1]);
          }}
          className={`${
            Clicked === el[0] + el[1]
              ? " bg-my_green"
              : " bg-my_soft_cream border-2 border-my_soft_black"
          }
          ${
            Clicked === el[0] + el[1]
              ? " text-my_soft_cream"
              : " text-my_soft_black"
          }
          flex 
          flex-col 
          w-16 
          h-16 
          justify-center 
          hover:bg-opacity-90
          hover:bg-my_green
          rounded-xl  
          font-bold 
          m-2 
          hover:font-bold`}
          key={index}
        >
          {el[2] + el[3] + el[4]}
        </div>
      </div>
    );
  });

  return (
    <div
      className="
      group 
      flex 
      fixed 
      items-center
      bottom-0
      self-center
      justify-self-center
      w-full
      h-22 
      bg-my_soft_cream
       border-my_soft_black
      border-2
      overflow-auto
      snap-center
      snap-x
      shadow-2xl
      sm:top-24
      sm:w-fit
      sm:right-16
      sm:flex-col
      sm:h-3/4
      sm:overflow-y-auto
      sm:rounded-lg
      rounded-t-md
      sm:p-0
      p-2"
      style={{direction: "rtl"}}
    >
      {selections}
    </div>
  );
}
