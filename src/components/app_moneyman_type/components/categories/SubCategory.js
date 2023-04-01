import React, {useContext} from "react";
import {BiPlus, BiShekel} from "react-icons/bi";
import {SubCategoryDetailsContext} from "../../../context/SubCategoryDetailsContext";

export default function SubCategory(props) {
  const sum = props.sum.toString().slice(1);

  const [
    [subCategoryDetailsOn, setSubCategoryDetailsOn],
    [subCategory, setSubCategory],
    [companies, setCompanies],
  ] = useContext(SubCategoryDetailsContext);
  return (
    <div className="group duration-100 bg-opacity-90">
      <div
        className=" grid grid-cols-4 w-72 max-h-20 min-h-20 p-2 justify-center items-center rounded-lg text-my_soft_black border-my_soft_black border-2 ml-4 mr-4 group-hover:bg-opacity-80 font-medium shadow-lg"
        onClick={() => {
          setCompanies(props.companies);
          setSubCategoryDetailsOn(true);
        }}
      >
        <div
          className=" col-start-1 col-end-1 flex flex-row justify-end"
          onClick={() => {
            setCompanies(props.companies);
            setSubCategoryDetailsOn(true);
          }}
        >
          <div className=" flex self-end rounded-full w-14 h-14 bg-my_green justify-center items-center p-1 text-2xl hover:text-3xl">
            <BiPlus />
          </div>
        </div>

        <div className=" col-start-2 col-end-4 flex flex-row justify-center">
          <div className=" flex flex-row w-full items-center  justify-center h-full">
            <span className=" w-fit font-bold ">{props.category}</span>
          </div>
        </div>
        <div className="flex flex-row col-start-4 col-end-4 items-center justify-start font-bold m-2 gap-1 text-lg">
          <div>{sum}</div>
          <div className="mt-1 -mr-1">
            {" "}
            <BiShekel />
          </div>
        </div>
      </div>
    </div>
  );
}
