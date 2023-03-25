import React, {useContext} from "react";
import {MdOutlineClear} from "react-icons/md";
import {PersonalSpaceContext} from "../../../context/PersonalSpace";

import DataInfo from "./DataInfo";

export default function PersonalSpacePage() {
  const [personalSpaceContext, setPersonalSpaceContext] =
    useContext(PersonalSpaceContext);

  return (
    <div
      className=" 
    fixed 
    flex
    justify-center
    left-0 
    top-0 
    w-full 
    h-full 
    bg-black 
    bg-opacity-40 
    items-center"
    >
      <div
        className="
        flex 
        flex-col 
        fixed 
        w-full
        h-full 
        sm:w-3/4 
        sm:h-5/6 
        sm:rounded-lg 
         bg-my_soft_cream
         sm:border-2
         sm:border-my_soft_black
        shadow-2xl 
        animate-comeUp"
      >
        <div className="flex flex-row justify-end h-fit w-full p-4">
          <div
            onClick={() => setPersonalSpaceContext(false)}
            className="
                flex 
                flex-row 
                top-5
                left-5
                w-12 
                h-12 
                justify-center 
                items-center 
                text-my_soft_black
                 bg-my_green
                rounded-lg 
                text-2xl 
                hover:text-3xl 
                hover:bg-opacity-80"
          >
            <MdOutlineClear />
          </div>
        </div>

        <div className="flex flex-row justify-center lg:justify-end bg-opacity-50 w-full h-full  sm:p-4 text-my_soft_black">
          <div className="flex flex-col w-full md:w-11/12 lg:w-3/6 text-start overflow-y-auto gap-8">
            <DataInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
