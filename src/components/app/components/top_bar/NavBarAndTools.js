import React, {useContext} from "react";
import Dropdown from "./Dropdown";
import {BiCog} from "react-icons/bi";
import LogoutButton from "./LogoutButton";
import {PersonalSpaceContext} from "../../../context/PersonalSpace";

export default function NavBarAndTools(props) {
  const [personalSpaceContext, setPersonalSpaceContext] =
    useContext(PersonalSpaceContext);
  return (
    <div className="z-10 flex flex-row fixed right-3 top-3  sm:left-16 sm:top-16  w-fit h-fit">
      <Dropdown data={props.data} />
      <div
        onClick={() => setPersonalSpaceContext(true)}
        className="flex items-center bg-my_soft_cream border-2 border-my_soft_black w-16 h-16 rounded-lg hover:bg-my_green font-medium hover:font-bold ml-2 justify-center
                transition ease-out  
                hover:-translate-y-1
                hover:scale-10
                shadow-2xl"
      >
        <div className="text-my_soft_black">
          <BiCog size={"25px"} />
        </div>
      </div>
      <LogoutButton />
    </div>
  );
}
