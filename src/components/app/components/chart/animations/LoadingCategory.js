import React from "react";
import {BiShekel} from "react-icons/bi";
export default function LoadingCategory(props) {
  return (
    <div>
      <div className="flex flex-row w-full h-full animate-pulse">
        <div>
          <div className="h-64 w-48 min-w-fit bg-my_green border-2 border-my_soft_black text-my_soft_cream text-lg rounded-md text flex flex-col gap-4 justify-center items-center p-3">
            <div className="font-bold text-md items-center text-center text-my_soft_black w-28 h-3 bg-my_soft_black rounded-full flex  justify-center"></div>
            <div className="font-bold flex flex-row text-xl justify-center items-center">
              <div className="mt-1"></div>
              <div className="h-3 w-16 bg-my_soft_cream rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-64 justify-center items-center text-[250px] leading-3 text-my_pink font-black">
          <div className="-ml-10 outline-3 outline-slate-700">?</div>
        </div>
      </div>
    </div>
  );
}
