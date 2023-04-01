import React, {useContext, useEffect, useState} from "react";
import Category from "./Category";
import {RiRestaurantLine} from "react-icons/ri";
import {getMonth} from "../../../data_management/pullData";
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
        category: "לא זוהה",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "העברות ומשיכות באשראי",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "קניות",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "מסעדות ואוכל בחוץ",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "סופרים ומכולות",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "תחבורה",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "שירותי אינטרנט",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "חשבונות משק הבית",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "מיסים",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
      },
      {
        category: "תרומות",
        companies: [
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
          {sum: 0, transactions: [{companyInfo: {logoUrl: "", url: ""}}]},
        ],
        sum: 0,
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

  return (
    <div className="w-full flex flex-col sm:col-start-2 sm:col-end-8 gap-1">
      <Category
        name={"לא זוהה"}
        categories={data}
        icon={<BiRadar color="#F45B69" size={"40"} />}
      />
      <Category
        name={"העברות ומשיכות באשראי"}
        categories={data}
        icon={<BiTransferAlt size={"40"} />}
      />
      <Category
        name={"קניות"}
        categories={data}
        icon={<BiCartAlt size={"40"} />}
      />
      <Category
        name={"מסעדות ואוכל בחוץ"}
        categories={data}
        icon={<RiRestaurantLine size={"40"} />}
      />
      <Category
        name={"סופרים ומכולות"}
        categories={data}
        icon={<BiBasket size={"40"} />}
      />
      <Category
        name={"תחבורה"}
        categories={data}
        icon={<BiTrip size={"40"} />}
      />
      <Category
        name={"שירותי אינטרנט"}
        categories={data}
        icon={<BiTachometer size={"40"} />}
      />
      <Category
        name={"חשבונות משק הבית"}
        categories={data}
        icon={<BiHomeSmile size={"40"} />}
      />

      <Category
        name={"מיסים"}
        categories={data}
        icon={<BiReceipt size={"40"} />}
      />
      <Category
        name={"תרומות"}
        categories={data}
        icon={<BiDonateHeart size={"40"} />}
      />
    </div>
  );
}
