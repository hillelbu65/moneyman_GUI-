import React, {useContext, useEffect, useState} from "react";
import {PullDataContext} from "../../../context/PullDataContext";
import {getMonth} from "../../../data_management/pullData";
import LoadingCategory from "./animations/LoadingCategory";
import Category from "./Category";

export default function ChartView() {
  const [data, setData] = useState({
    data: [
      {category: "", sum: ""},
      {category: "", sum: ""},
      {category: "", sum: ""},
      {category: "", sum: ""},
      {category: "", sum: ""},
      {category: "", sum: ""},
      {category: "", sum: ""},
      {category: "", sum: ""},
      {category: "", sum: ""},
      {category: "", sum: ""},
    ],
  });
  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);

  useEffect(() => {
    setData({
      data: [
        {category: "", sum: ""},
        {category: "", sum: ""},
        {category: "", sum: ""},
        {category: "", sum: ""},
        {category: "", sum: ""},
        {category: "", sum: ""},
        {category: "", sum: ""},
        {category: "", sum: ""},
        {category: "", sum: ""},
        {category: "", sum: ""},
      ],
    });
    const getMonthData = async () => {
      const data = await getMonth(sheetId, sheetName, month, year);
      return data;
    };
    getMonthData().then((data) => setData(data));
  }, [year, month, sheetId, sheetName]);

  const categories = data.data.map((category, i) => {
    if (category.sum === "") {
      return (
        <LoadingCategory sum={category.sum} category={category.category} />
      );
    } else {
      return (
        <Category key={i} sum={category.sum} category={category.category} />
      );
    }
  });

  return (
    <div className="grid grid-cols-2 grid-flow-row gap-4 w-full col-start-1 col-end-9 sm:col-start-2 sm:col-end-8  mt-10 rounded-lg text-black p-6">
      {categories}
    </div>
  );
}
