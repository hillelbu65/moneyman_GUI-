import React from "react";

export default function LoadingCompanyCard() {
  return (
    <div className="group animate-pulse duration-100 bg-opacity-90">
      <div className=" grid grid-cols-4 w-72 max-h-20 min-h-20 p-2 justify-center items-center rounded-lg border-my_soft_black/70 border-2 ml-4 mr-4 font-medium shadow-lg">
        <div className=" col-start-1 col-end-1 flex flex-row justify-end">
          <div className=" flex self-end rounded-full w-14 h-14 bg-my_green justify-center/70 items-center p-1">
            <div className=" flex self-end rounded-full w-12 h-12 bg-my_soft_cream/70 justify-center items-center p-2"></div>
          </div>
        </div>

        <div className=" col-start-2 col-end-4 flex flex-row justify-center">
          <div className=" flex flex-row w-full items-center  justify-center h-full">
            <div className=" bg-my_soft_black/70 h-3 w-2/4 rounded-md"></div>
          </div>
        </div>
        <div className="flex flex-row col-start-4 col-end-4 items-center justify-center font-bold text-lg">
          <div className=" bg-my_soft_black/70 h-3 w-2/4 rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
