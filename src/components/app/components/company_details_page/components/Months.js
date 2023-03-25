/* eslint-disable no-unused-vars */
import React, {useContext, useEffect, useState} from "react";
import {CompanyDetailsContext} from "../../../../context/CompanyDetailsContext";
import {PullDataContext} from "../../../../context/PullDataContext";
import {getYearBillData} from "../../../../data_management/pullData";
import Month from "./Month";

export default function Months() {
  const [yearData, setYearData] = useState({data: [], sum: 0});
  const [
    [companyDetailsOn, setCompanyDetailsOn],
    [company, setCompany],
    [companyYearData, setCompanyYearData],
  ] = useContext(CompanyDetailsContext);

  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);

  useEffect(() => {
    const getData = async () => {
      const response = await getYearBillData(
        localStorage.getItem("sheet_id"),
        localStorage.getItem("sheet_name"),
        company,
        year
      );
      setCompanyYearData(response);
      console.log("Months");
      console.log(response);
      return response;
    };
    getData().then((data) => setYearData(data));
  }, []);

  const months = yearData.data.map((element, index) => {
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
