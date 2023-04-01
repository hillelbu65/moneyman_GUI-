import React, {useContext, useEffect} from "react";
import {MdKeyboardArrowRight, MdOutlineClear} from "react-icons/md";
import CompanyCard from "../categories/CompanyCard";
import {SubCategoryDetailsContext} from "../../../context/SubCategoryDetailsContext";
import {getYearBillData} from "../../../data_management/PullDataMoneyman";

export default function SubCategoryPage() {
  const [
    [subCategoryDetailsOn, setSubCategoryDetailsOn],
    [subCategory, setSubCategory],
    [companies, setCompanies],
  ] = useContext(SubCategoryDetailsContext);

  const companiesMap = companies.map((company, index) => {
    return <CompanyCard key={index} data={company} />;
  });

  const month = () => {
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
      if (el[0] + el[1] === companies[0].transactions[0].month) {
        return el;
      }
    });
    return monthName[2] + monthName[3] + monthName[4];
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
        animate-comeUp"
      >
        <div className="flex flex-row w-full h-fit justify-end gap-2 p-4">
          <div className="flex flex-row justify-end items-center  text-md sm:text-xl font-bold text-my_soft_black">
            {companies[0].subCategory}
            <div className=" text-my_green">{}</div>
            <span className=" text-my_green mt-1 rotate-180">
              <MdKeyboardArrowRight />
            </span>{" "}
            {month()}
            <span className=" text-my_green mt-1 rotate-180">
              <MdKeyboardArrowRight />
            </span>{" "}
            {companies[0].transactions[0].year}
          </div>

          <div
            onClick={() => setSubCategoryDetailsOn(false)}
            className="flex w-12 h-12 justify-center items-center text-my_soft_black bg-my_green rounded-lg text-2xl hover:text-3xl hover:bg-opacity-80"
            style={{minHeight: "40px", minWidth: "40px"}}
          >
            <MdOutlineClear />
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 h-fit p-3 overflow-auto ">
          {companiesMap}
        </div>
      </div>
    </div>
  );
}
