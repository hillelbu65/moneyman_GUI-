import React, {useContext, useEffect, useState} from "react";
import {calculateTheSumOfTheMonth} from "../../data_management/CalculationUtils";
import {getMonth} from "../../data_management/pullData";

export default function Balance() {
  const [sumData, setSumData] = useState("");

  const getMonthData = async () => {
    const data = await getMonth(
      localStorage.getItem("sheet_id"),
      localStorage.getItem("sheet_name"),
      localStorage.getItem("month"),
      localStorage.getItem("year")
    );
    setSumData(calculateTheSumOfTheMonth(data.data));
    console.log(calculateTheSumOfTheMonth(data.data));
  };

  useEffect(() => {
    getMonthData();
  }, []);

  return (
    <div className=" h-fit w-full col-start-2 col-end-8 mt-40 grid grid-cols-8">
      <div className="h-20 w-full col-start-1 col-end-9 flex flex-col place-content-center text-my_pink font-bold text-3xl items-center">
        <div className="font-bold text-my_soft_black">הוצאתם החודש</div>
        <div className="flex flex-row justify-center items-center">
          {/* <div className="mt-2">{currencyContext.icon}</div> */}
          {sumData.toString().slice(1)}
        </div>
      </div>
    </div>
  );
}
