import React, {useContext, useEffect} from "react";
import {CompanyDetailsContext} from "../context/CompanyDetailsContext";
import {PersonalSpaceContext} from "../context/PersonalSpace";
import Balance from "./components/Balance";
import Categories from "./components/categories/Categories";
import ChartView from "./components/chart/ChartView";
import Billdetailspage from "./components/company_details_page/Billdetailspage";
import PersonalSpacePage from "./components/personal_space/PersonalSpacePage";
import MonthBar from "./components/side_bar/MonthBar";
import NavBarAndTools from "./components/top_bar/NavBarAndTools";

export default function MonthOverviewPage() {
  const [personalSpaceContext, setPersonalSpaceContext] =
    useContext(PersonalSpaceContext);
  const [
    [companyDetailsOn, setCompanyDetailsOn],
    [company, setCompany],
    [companyYearData, setCompanyYearData],
  ] = useContext(CompanyDetailsContext);

  return (
    <div className="p-0 flex flex-col sm:p-10 sm:grid sm:grid-cols-8 gap-3">
      <NavBarAndTools />
      <Balance />
      <ChartView />
      <MonthBar />
      <Categories />

      {/* Space Holder */}
      <div className=" h-24 w-ful col-start-1 col-end-9"></div>
      {/* Space Holder */}

      {personalSpaceContext ? <PersonalSpacePage /> : ""}
      {companyDetailsOn ? <Billdetailspage /> : ""}
    </div>
  );
}
