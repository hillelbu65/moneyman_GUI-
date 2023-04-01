import React from "react";
import Months from "./Months";

export default function BillView(props) {
  return (
    <div className="flex flex-col w-full h-fit">
      <Months data={props.data} />
    </div>
  );
}
