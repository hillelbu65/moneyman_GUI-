import React from "react";
import {BiShekel} from "react-icons/bi";
export default function LoadingCategory(props) {
  return (
    <div className="row-span-2 w-full animate-pulse h-36 bg-my_green/70 border-2 border-my_soft_black/70 text-my_soft_cream/70 text-lg rounded-md text flex flex-col gap-4 justify-center items-center p-3">
      <div className="font-bold text-md items-center text-center  w-full flex  justify-center">
        <div className=" bg-my_soft_black/70 h-3 w-3/4 rounded-md"></div>
      </div>
      <div className="font-bold flex flex-row text-xl w-full justify-center items-center">
        <div className=" mt-4 bg-my_soft_cream h-3 w-2/4 rounded-md "></div>
      </div>
    </div>
  );
}
