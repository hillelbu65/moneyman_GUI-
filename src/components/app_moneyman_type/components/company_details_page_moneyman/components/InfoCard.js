import React from "react";
import {BiLinkAlt} from "react-icons/bi";
export default function InfoCard(props) {
  return (
    <div>
      <a href={props.url}>
        <div className="text-base gap-1 rounded-md h-20 w-44 flex flex-row justify-end items-end bg-my_soft_cream border-2 border-my_soft_black text-my_soft_black p-2">
          <div> אתר החברה </div>
          <div>{<BiLinkAlt size={"25"} />}</div>
        </div>
      </a>
    </div>
  );
}
