import React, {useContext, useEffect, useState} from "react";
import Category from "./Category";
import {RiRestaurantLine} from "react-icons/ri";
import {getMonth} from "../../../data_management/PullDataMoneyman";
import {PullDataContext} from "../../../context/PullDataContext";
import {
  BiBasket,
  BiCartAlt,
  BiDonateHeart,
  BiHomeSmile,
  BiRadar,
  BiReceipt,
  BiTachometer,
  BiTransferAlt,
  BiTrip,
} from "react-icons/bi";
import {PromptContext} from "../../../context/PromptContext";

export default function Categories() {
  const [data, setData] = useState([]);

  const [prompt, setPrompt] = useContext(PromptContext);

  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);

  useEffect(() => {
    setData([
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
      {
        category: "",
        subCategoriesData: [
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
          {category: "", sum: 0, transactions: [{category: ""}]},
        ],
      },
    ]);
    const getDataFromGoogle = async () => {
      const response = await getMonth(
        localStorage.getItem("sheet_id"),
        localStorage.getItem("sheet_name"),
        month,
        year
      );
      setData(response.data);
    };
    getDataFromGoogle().catch(() =>
      setPrompt({
        type: "error",
        text: "אנחנו לא מצליחים למשוך את המידע שלכם. או שחסרים פרטים בהגדרות או שהם שגואים. כאשר אתם בטוחים שהמידע נכון התחברו מחדש עם גוגל",
        state: true,
        time: 15000,
      })
    );
  }, [month, year]);

  const categories = data.map((category, index) => {
    return <Category subCategories={category.subCategoriesData} />;
  });

  return (
    <div className="w-full flex flex-col sm:col-start-2 sm:col-end-8 gap-1">
      {categories}
    </div>
  );
}
