import React, {useContext, useEffect, useState} from "react";
import Category from "./Category";
import {
  MdOutlineDirectionsBusFilled,
  MdOutlineFastfood,
  MdOutlineHelpOutline,
  MdOutlineShoppingCart,
  MdOutlineSwapHoriz,
  MdOutlineCloud,
  MdOutlineStickyNote2,
  MdOutlineShoppingBag,
  MdOutlineTableView,
  MdDisabledByDefault,
  MdExploreOff,
  MdShoppingBag,
  MdSwapHorizontalCircle,
  MdShoppingCart,
  MdHelp,
  MdLunchDining,
  MdRestaurant,
  MdStoreMallDirectory,
  MdTraffic,
  MdWbCloudy,
  MdVolunteerActivism,
  MdLocalMall,
  MdTableView,
  MdHomeFilled,
} from "react-icons/md";
import {
  FiChevronsLeft,
  FiCloud,
  FiCoffee,
  FiCompass,
  FiFileMinus,
  FiShoppingBag,
  FiShoppingCart,
} from "react-icons/fi";
import {
  BiBasket,
  BiBookmarkAlt,
  BiCartAlt,
  BiDonateHeart,
  BiHomeSmile,
  BiRadar,
  BiReceipt,
  BiRestaurant,
  BiStore,
  BiTachometer,
  BiTransferAlt,
  BiTrip,
} from "react-icons/bi";
import {RiRestaurantLine} from "react-icons/ri";
import {getMonth} from "../../../data_management/pullData";
import {PullDataContext} from "../../../context/PullDataContext";

export default function Categories() {
  const [data, setData] = useState([]);

  const [
    [month, setMonth],
    [year, setYear],
    [sheetName, setSheetName],
    [sheetId, setSheetId],
  ] = useContext(PullDataContext);

  const getDataFromGoogle = async () => {
    const response = await getMonth(
      localStorage.getItem("sheet_id"),
      localStorage.getItem("sheet_name"),
      month,
      year
    );
    setData(response.data);
  };

  useEffect(() => {
    const getDataFromGoogle = async () => {
      const response = await getMonth(
        localStorage.getItem("sheet_id"),
        localStorage.getItem("sheet_name"),
        month,
        year
      );
      setData(response.data);
    };
    getDataFromGoogle();
  }, [month, year]);

  return (
    <div className="w-full flex flex-col sm:col-start-2 sm:col-end-8 gap-1">
      <Category
        name={"לא זוהה"}
        categories={data}
        icon={<BiRadar color="#B22222" size={"40"} />}
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
