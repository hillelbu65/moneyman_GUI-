import React from "react";
import LogoSVG from "../../login/LogoSVG";

export default function TopBar() {
  return (
    <div className="flex flex-row w-full h-fit p-2">
      <div className="justify-self-start animate-comeRight">
        <LogoSVG />
      </div>
    </div>
  );
}
