import React, {useContext} from "react";
import {PullDataContext} from "../../../../context/PullDataContext";
import Transaction from "./Transaction";

export default function Month(props) {
  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);

  console.log(props)

  const monthName =
    props.monthName[2] + props.monthName[3] + props.monthName[4];

  const transactions = props.transactions.map((transaction, index) => {
    return <Transaction key={index} data={transaction} />;
  });
  return (
    <div className="flex flex-col p-2 justify-center h-fit rounded-md gap-2 ">
      <div className="flex flex-row justify-end items-center gap-2">
        {month === props.monthName[0] + props.monthName[1] ? (
          <div className="flex ml-2 h-8 w-fit bg-opacity-80 bg-my_soft_cream border-2 border-my_soft_black text-my_soft_black rounded-md p-2 justify-center items-center">
            החודש הנבחר
          </div>
        ) : (
          ""
        )}
        <div className="flex h-12 w-12 bg-my_green text-my_soft_cream rounded-md p-2 justify-center items-center font-semibold">
          {monthName}
        </div>
      </div>
      {transactions}
    </div>
  );
}
