import React from "react";
import {BiShekel} from "react-icons/bi";
export default function Category(props) {
  const sum = props.sum.toString().slice(1);
  return (
    <div>
      <div className="flex flex-row w-full h-full ">
        <div className="shadow-lg">
          <div className=" h-64 w-48 min-w-fit bg-my_green border-2 border-my_soft_black text-my_soft_cream text-lg rounded-md text flex flex-col gap-4 justify-center items-center p-3">
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
        </div>
        <div className="flex flex-col justify-center items-center text-[250px] leading-3 text-my_pink font-black h-64 shadow-none bg-none ">
          <div className="-ml-12 outline-slate-700">{props.place}</div>
        </div>
      </div>
    </div>
  );
}
