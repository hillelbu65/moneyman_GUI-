import React from "react";
import {BiLinkAlt} from "react-icons/bi";
export default function InfoCard(props) {
  return (
    <div className="bg-gradient-to-bl from-my_green to-my_pink rounded-md p-1">
      <a href={props.url}>
        <div className="text-base gap-1 rounded-md h-56 w-44 flex flex-row justify-end items-end backdrop-blur-lg bg-white/3 text-my_soft_black p-2">
          <div> אתר החברה </div>
          <div>{<BiLinkAlt size={"25"} />}</div>
        </div>
      </a>
    </div>
  );
}
