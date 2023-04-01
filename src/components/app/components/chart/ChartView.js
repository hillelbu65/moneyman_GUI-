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

  const sortedArray = data.data.sort(function (a, b) {
    return a.sum - b.sum;
  });

  const categories = sortedArray.map((category, i) => {
    if (category.sum === "") {
      return (
        <LoadingCategory sum={category.sum} category={category.category} />
      );
    } else {
      return (
        <Category
          key={i}
          place={i + 1}
          sum={category.sum}
          category={category.category}
        />
      );
    }
  });

  return (
    <div className="flex flex-row-reverse overflow-x-auto overflow-y-clip gap-4 w-full h-72 col-start-1 col-end-9 sm:col-start-2 sm:col-end-8  text-black p-6 items-center">
      {categories}
    </div>
  );
}
