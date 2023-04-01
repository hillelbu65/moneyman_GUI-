import React, {useContext, useEffect} from "react";
import {PersonalSpaceContext} from "../context/PersonalSpace";
import PersonalSpacePage from "../app/components/personal_space/PersonalSpacePage";
import Balance from "./components/Balance";
import Categories from "./components/categories/Categories";
import MonthBar from "./components/side_bar/MonthBar";
import NavBarAndTools from "./components/top_bar/NavBarAndTools";
import {SubCategoryDetailsContext} from "../context/SubCategoryDetailsContext";
import SubCategoryPage from "./components/sub_category_page/SubCategoryPage";
import CompanyDetailsPage from "./components/company_details_page_moneyman/CompanyDetailsPage";
import {CompanyDetailsMoneyman} from "../context/CompanyDetailsMoneyman";
import ChartView from "./components/chart/ChartView";

export default function MonthOverviewPageMoneyman() {
  const [personalSpaceContext, setPersonalSpaceContext] =
    useContext(PersonalSpaceContext);
  const [
    [companyDetailsOn, setCompanyDetailsOn],
    [company, setCompany],
    [companyYearData, setCompanyYearData],
  ] = useContext(CompanyDetailsMoneyman);

  const [
    [subCategoryDetailsOn, setSubCategoryDetailsOn],
    [subCategory, setSubCategory],
    [companies, setCompanies],
  ] = useContext(SubCategoryDetailsContext);

  return (
    <div className="p-0 flex flex-col sm:p-10 sm:grid sm:grid-cols-8 gap-3">
      <NavBarAndTools key={"NavBarAndTools"} />
      <Balance key={"Balance"} />
      <ChartView key={"ChartView"} />
      <MonthBar key={"MonthBar"} />
      <Categories key={"Categories"} />

      {/* Space Holder */}
      <div className=" h-24 w-ful col-start-1 col-end-9"></div>
      {/* Space Holder */}

      {personalSpaceContext ? (
        <PersonalSpacePage key={"PersonalSpacePage"} />
      ) : (
        ""
      )}

      {subCategoryDetailsOn ? <SubCategoryPage key={"SubCategoryPage"} /> : ""}
      {companyDetailsOn ? <CompanyDetailsPage /> : ""}
    </div>
  );
}
