import React, {useContext} from "react";
import {BiShekel} from "react-icons/bi";
import {CompanyDetailsMoneyman} from "../../../context/CompanyDetailsMoneyman";

export default function CompanyCard(props) {
  const [
    [companyDetailsOn, setCompanyDetailsOn],
    [company, setCompany],
    [companyYearData, setCompanyYearData],
  ] = useContext(CompanyDetailsMoneyman);

  const sum = () => {
    const sum = props.data.sum.toString().slice(1);
    if (sum === "") {
      return "0";
    } else {
      return sum;
    }
  };

  return (
    <div className="group duration-100 bg-opacity-90">
      <div
        className="flex flex-row w-full gap-4 max-h-20 min-h-20 p-2 justify-end items-center rounded-lg text-my_soft_black border-my_soft_black border-2 group-hover:bg-opacity-80 font-medium shadow-lg"
        onClick={() => {
          setCompanyDetailsOn(true);
          setCompany(props.data.name);
        }}
      >
        <div className="flex flex-row items-center justify-end font-bold m-2 gap-1 text-lg">
          <div className="-mr-1 mt-1">
            <BiShekel />
          </div>
          <div>{sum()}</div>
        </div>

        <div className="flex flex-row justify-end">
          <div className=" flex flex-row w-full items-center  justify-end h-full">
            <span className=" w-fit font-bold ">{props.data.name}</span>
          </div>
        </div>

        <div className="flex flex-row justify-end w-fit">
          <div className=" flex self-end rounded-full w-14 h-14 bg-my_green justify-center items-center p-1">
            <div className=" flex self-end rounded-full w-12 h-12 bg-my_soft_cream justify-center items-center p-2">
              <img
                className="w-full"
                src={props.data.transactions[0].companyInfo.logoUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
