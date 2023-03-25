import React from "react";
import {BiShekel} from "react-icons/bi";
export default function Category(props) {
  const sum = props.sum.toString().slice(1);
  return (
    <div className="row-span-2 w-full h-28 bg-my_green border-2 border-my_soft_black text-my_soft_cream text-lg rounded-md text flex flex-col gap-4 justify-center items-center p-3">
      <div className="font-bold text-md items-center text-center text-my_soft_black w-full flex  justify-center">
        {props.category}
      </div>
      <div className="font-bold flex flex-row text-xl justify-center items-center">
        <div className="mt-1">
          <BiShekel />
        </div>
        <div>{sum}</div>
      </div>
    </div>
  );
}
