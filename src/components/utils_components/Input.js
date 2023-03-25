import React, {useContext, useEffect, useState} from "react";
import {PullDataContext} from "../context/PullDataContext";

export default function Input({name = "", header = ""}) {
  const [value, setValue] = useState(localStorage.getItem(name));
  const [borderStyle, setBorderStyle] = useState("");

  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);

  useEffect(() => {
    if (value === "") {
      setBorderStyle(
        "flex text-end text-my_soft_black p-2 border-my_pink border-2 bg-neutral-100 bg-opacity-0 rounded-md"
      );
    } else if (value !== "") {
      setBorderStyle(
        "flex text-end text-my_soft_black p-2 border-my_green border-2 bg-neutral-100 bg-opacity-0 rounded-md"
      );
    }
  });
  return (
    <div className=" flex flex-col h-fit">
      <input
        className={borderStyle}
        onChange={(e) => {
          localStorage.setItem(name, e.target.value);
          if (name === "sheet_id") {
            setSheetId(e.target.value);
          } else if (name === "sheet_name") {
            setSheetName(e.target.value);
          }
          setValue(localStorage.getItem(name));
        }}
        value={value}
        placeholder={header}
      />
    </div>
  );
}
