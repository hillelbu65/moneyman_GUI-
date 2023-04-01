import React, {useContext, useEffect, useState} from "react";
import {PullDataContext} from "../../../context/PullDataContext";
import {getMonth} from "../../../data_management/pullData";
import LoadingCategory from "./animations/LoadingCategory";
import Category from "./Category";
import {BiStar} from "react-icons/bi";

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
    <div className="flex flex-col w-full h-fit col-start-1 col-end-9 sm:col-start-2 sm:col-end-8 ">
      <div className="w-full mt-10 pr-5 text-my_soft_black font-bold text-2xl flex flex-row-reverse">
        <span className=" text-my_soft_cream mb-2 ml-2 p-2 bg-my_green rounded-full">
          <BiStar size={"40"} />{" "}
        </span>
        <span className="mt-3 text-my_soft_black"> טופ 10</span>
      </div>
      <div className="flex flex-row-reverse overflow-x-auto overflow-y-clip gap-4 text-black p-6 items-center">
        {categories}
      </div>
    </div>
  );
}
