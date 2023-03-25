import React from "react";
import {useNavigate} from "react-router-dom";
import {MdOutlineLogout} from "react-icons/md";

export default function GoogleLogoutButton() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={navigate("/")}
        className="flex items-center bg-my_soft_cream border-2 border-my_soft_black w-16 h-16 rounded-lg hover:bg-my_green font-medium hover:font-bold ml-2 justify-center
          transition ease-out
          hover:-translate-y-1
          hover:scale-10
          shadow-2xl
           text-my_soft_black
          text-2xl"
      >
        <div className="rotate-180">
          <MdOutlineLogout />
        </div>
      </button>
    </div>
  );
}
