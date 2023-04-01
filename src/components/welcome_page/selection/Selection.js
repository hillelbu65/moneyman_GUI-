import React, {useContext, useEffect, useState} from "react";
import {AppTypeContext} from "../../context/AppTypeContext";

export default function Selection(props) {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [style1, setStyle1] = useState("");
  const [style2, setStyle2] = useState("");

  const [appTypeContext, setAppTypeContext] = useContext(AppTypeContext);

  useEffect(() => {
    if (selected1) {
      setStyle1(
        "flex flex-col justify-center items-center border-2 border-my_green text-my_green font-bold p-1  w-36 h-36 rounded-lg backdrop-blur-md"
      );
      setSelected2(false);
      setAppTypeContext("caspion");
      localStorage.setItem("apptype", "caspion");
    } else {
      setStyle1(
        "flex flex-col justify-center items-center border-2 border-my_soft_black text-my_soft_black p-1  w-36 h-36 rounded-lg backdrop-blur-sm"
      );
    }
  }, [selected1]);
  useEffect(() => {
    if (selected2) {
      setStyle2(
        "flex flex-col justify-center items-center border-2 border-my_green text-my_green font-bold p-1  w-36 h-36 rounded-lg backdrop-blur-sm"
      );
      setSelected1(false);
      setAppTypeContext("moneyman");
      localStorage.setItem("apptype", "moneyman");
    } else {
      setStyle2(
        "flex flex-col justify-center items-center border-2 border-my_soft_black text-my_soft_black p-1 w-36 h-36 rounded-lg backdrop-blur-sm"
      );
    }
  }, [selected2]);
  return (
    <div className="flex flex-row gap-2">
      <div className={style1} onClick={() => setSelected1(true)}>
        <div>{props.name1}</div>
      </div>
      <div className={style2} onClick={() => setSelected2(true)}>
        <div>{props.name2}</div>
      </div>
    </div>
  );
}
