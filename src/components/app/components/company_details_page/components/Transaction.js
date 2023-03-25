import React, {useContext, useEffect, useState} from "react";

export default function Transaction(props) {
  const [borderStyle, setBorderStyle] = useState("");
  const [dayStyle, setDayStyle] = useState("");
  const day = props.data.date[0] + props.data.date[1];
  const amount = () => {
    if (props.data.amount.toString()[0] === "-") {
      return props.data.amount.toString().slice(1);
    } else if (props.data.amount.toString()[0] !== "-") {
      const amount = props.data.amount.toString();
      return "+" + amount;
    }
  };

  console.log(props);

  useEffect(() => {
    if (props.data.amount.toString()[0] === "-") {
      setBorderStyle("w-full h-fit rounded-lg p-0.5 bg-my_soft_black");
      setDayStyle(
        "flex min-h-8 bg-my_green rounded-md items-center justify-center text-my_soft_black"
      );
    } else if (props.data.amount.toString()[0] !== "-") {
      setBorderStyle(
        "w-full h-fit rounded-lg p-0.5 bg-gradient-to-l from-my_pink via-my_green to-my_soft_black"
      );
      setDayStyle(
        "flex min-h-8 bg-my_pink rounded-md items-center justify-center font-bold text-my_soft_cream"
      );
    }
  }, []);

  return (
    <div className={borderStyle}>
      <div className="flex flex-row w-full items-center justify-end p-2 shadow-sm rounded-md gap-3 bg-my_soft_cream ">
        <div className="flex flex-row justify-self-start  w-full">
          <div className=" flex flex-row gap-3 justify-center justify-self-start items-center">
            <div className="flex flex-col bg-my_soft_cream text-my_soft_black rounded-md w-16 shadow-lg">
              <div className=" w-full h-3 bg-my_green rounded-t-md"></div>
              <div className="p-1">{props.data.card}</div>
            </div>
            <div>{props.data.moreInfo}</div>
          </div>
        </div>
        <div className="flex flex-row items-center text-my_soft_black font-semibold">
          <span className="mt-1"></span> {amount()}{" "}
        </div>
        <div className={dayStyle} style={{minWidth: "32px", minHeight: "32px"}}>
          {day}
        </div>
      </div>
    </div>
  );
}
