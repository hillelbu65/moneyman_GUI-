/* eslint-disable jsx-a11y/alt-text */
import React, {useContext} from "react";
import {CompanyDetailsContext} from "../../../context/CompanyDetailsContext";
// import {CurrencyContext} from "../../../context/CurrencyContext";

export default function CompanyCard(props) {
  // const [[currencyContext, setCurrencyContext], [itsUpdate, setItsUpdate]] =
  //   useContext(CurrencyContext);
  // const [[billDetailsOn, setBillDetailsOn], [company, setCompany]] = useContext(
  //   CompanyDetailsContext
  // );

  const sum = props.data.sum.toString().slice(1);

  return (
    <div className="group duration-100 bg-opacity-90">
      <div
        className=" grid grid-cols-4 w-72 max-h-20 min-h-20 p-2 justify-center items-center rounded-lg text-my_soft_black border-my_soft_black border-2 ml-4 mr-4 group-hover:bg-opacity-80 font-medium shadow-lg"
        onClick={() => {
          // setBillDetailsOn(true);
          // setCompany(props.data);
          // companySum();
          console.log("clicked");
        }}
      >
        <div className=" col-start-1 col-end-1 flex flex-row justify-end">
          <div className=" flex self-end rounded-full w-14 h-14 bg-my_green justify-center items-center p-1">
            <div className=" flex self-end rounded-full w-12 h-12 bg-slate-50 justify-center items-center p-2">
              <img
                className="w-full"
                src={props.data.transactions[0].companyInfo.logoUrl}
              />
            </div>
          </div>
        </div>

        <div className=" col-start-2 col-end-4 flex flex-row justify-center">
          <div className=" flex flex-row w-full items-center  justify-center h-full">
            <span className=" w-fit font-bold ">{props.data.name}</span>
          </div>
        </div>
        <div className="flex flex-row col-start-4 col-end-4 items-center justify-start font-bold m-2 gap-1 text-lg">
          <div>{sum}</div>
          {/* <div className="-mr-1 mt-1">{currencyContext.icon}</div> */}
        </div>
      </div>
    </div>
  );
}
