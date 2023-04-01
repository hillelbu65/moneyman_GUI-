/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from "react";
import Month from "./Month";

export default function Months(props) {
  const months = props.data.data.map((element, index) => {
    const monthsNames = [
      "01ינו",
      "02פבו",
      "03מרץ",
      "04אפר",
      "05מאי",
      "06יונ",
      "07יול",
      "08אוג",
      "09ספט",
      "10אוק",
      "11נוב",
      "12דצמ",
    ];

    const monthName = monthsNames.find((el) => {
      if (el[0] + el[1] === element.month) {
        return el;
      }
    });

    return (
      <Month
        key={index}
        transactions={element.transactions}
        monthName={monthName}
      />
    );
  });

  return (
    <div className="flex flex-col p-2s justify-center gap-6">{months}</div>
  );
}
