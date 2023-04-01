/* eslint-disable jsx-a11y/alt-text */
import React, {useContext, useEffect, useState} from "react";
import {MdOutlineClear} from "react-icons/md";
import {MdKeyboardArrowRight} from "react-icons/md";
import {BiShekel} from "react-icons/bi";
import {PullDataContext} from "../../../context/PullDataContext";
import BillView from "./components/BillView";
import InfoCard from "./components/InfoCard";
import {CompanyDetailsMoneyman} from "../../../context/CompanyDetailsMoneyman";
import {getYearBillData} from "../../../data_management/PullDataMoneyman";

export default function CompanyDetailsPage() {
  const [url, setUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  const [yearData, setYearData] = useState({
    data: [
      {
        category: "",
        month: "03",
        companyName: "",
        sum: 0,
        companyInfo: {logoUrl: "", url: ""},
        transactions: [
          {
            category: "",
            month: "03",
            companyName: "",
            amount: "-3",
            card: "0000",
            moreInfo: "",
            date: "00/00/00",
            companyInfo: {logoUrl: "", url: ""},
          },
        ],
      },
    ],
    sum: 0,
    transactionsSum: "0",
  });
  const [
    [companyDetailsOn, setCompanyDetailsOn],
    [company, setCompany],
    [companyYearData, setCompanyYearData],
  ] = useContext(CompanyDetailsMoneyman);

  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);
  useEffect(() => {
    setUrl(companyYearData.data[0].transactions[0].companyInfo.url);
    setLogoUrl(companyYearData.data[0].transactions[0].companyInfo.logoUrl);
  }, [companyYearData]);

  useEffect(() => {
    const getData = async () => {
      const response = await getYearBillData(
        localStorage.getItem("sheet_id"),
        localStorage.getItem("sheet_name"),
        company,
        year
      );
      setCompanyYearData(response);
      return response;
    };
    getData().then((data) => setYearData(data));
  }, []);

  const sum = () => {
    const sum = companyYearData.sum.toString().slice(1);
    if (sum === "") {
      return "0";
    } else {
      return sum;
    }
  };

  const average = () => {
    const average = sum() / yearData.transactionsSum;
    return average;
  };

  return (
    <div
      className=" 
      z-20
      fixed 
      flex
      justify-center
      left-0 
      top-0 
      w-full 
      h-full 
      bg-black 
      bg-opacity-40 
      items-center"
    >
      <div
        className="
        flex 
        flex-col 
        fixed 
        w-full
        h-full 
        sm:w-3/4 
        sm:h-5/6 
        sm:rounded-lg 
         bg-my_soft_cream
         sm:border-2
         sm:border-my_soft_black
        justify-self-center 
        shadow-2xl 
        animate-comeLeft"
      >
        <div className="flex flex-row w-full h-fit justify-end gap-2 p-4">
          <div className="flex flex-row justify-end items-center  text-md sm:text-xl font-bold text-my_soft_black">
            {" "}
            <div className=" text-my_green">{company}</div>
            <span className=" text-my_green mt-1 rotate-180">
              <MdKeyboardArrowRight />
            </span>{" "}
            {companyYearData.data[0].transactions[0].subCategory}
            <span className=" text-my_green mt-1 rotate-180">
              <MdKeyboardArrowRight />
            </span>{" "}
            {companyYearData.data[0].transactions[0].category}
            <span className=" text-my_green mt-1 rotate-180">
              <MdKeyboardArrowRight />
            </span>{" "}
            {year}
          </div>

          <div
            onClick={() => setCompanyDetailsOn(false)}
            className="flex w-12 h-12 justify-center items-center text-my_soft_black bg-my_green rounded-lg text-2xl hover:text-3xl hover:bg-opacity-80"
            style={{minHeight: "40px", minWidth: "40px"}}
          >
            <MdOutlineClear />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 w-full h-full rounded-b-lg p-4 text-my_soft_black overflow-y-auto">
          <div className="flex flex-col p-1 text-2xl font-bold w-full sm:w-4/5 ">
            <div className="flex flex-row justify-end items-center gap-1 p-1 mr-2 text-2xl font-bold w-full">
              <div className="flex flex-row justify-center items-center w-full h-full">
                <div className=" grid grid-cols-3 w-full gap-2">
                  <div className="flex flex-col col-start-1 col-end-1 text-sm">
                    <span className="flex w-full justify-center items-center">
                      <BiShekel />
                      {sum()}
                    </span>
                    <span>סה"כ השנה</span>
                  </div>
                  <div className="flex flex-col col-start-2 col-end-2 text-sm">
                    <span> {companyYearData.transactionsSum}</span>
                    <span>עסקאות</span>
                  </div>
                  <div className="flex flex-col col-start-3 col-end-3 text-sm">
                    <span className="flex w-full justify-center items-center">
                      <BiShekel />
                      {average()}
                    </span>
                    <span>עסקה ממוצעת</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-row justify-end">
                <div className=" flex self-end rounded-full bg-my_green justify-center items-center p-1">
                  <div className=" flex self-end rounded-full w-16 h-16 bg-my_soft_cream justify-center items-center p-3">
                    <img className="w-full" src={logoUrl} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-2 h-fit p-2 ">
              {url !== "NotHere" || "" ? (
                <InfoCard title={"אתר אינטרנט"} url={url} />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="flex w-full sm:w-4/5">
            <BillView data={yearData} />
          </div>
        </div>
      </div>
    </div>
  );
}
