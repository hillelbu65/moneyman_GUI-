import React, {createContext, useState} from "react";

export const CompanyDetailsContext = createContext();

export const CompanyDetailsProvider = (props) => {
  const [companyDetailsOn, setCompanyDetailsOn] = useState(false);
  const [company, setCompany] = useState("");
  const [companyYearData, setCompanyYearData] = useState({
    data: [
      {transactions: [{category: "", companyInfo: {logoUrl: "", url: ""}}]},
    ],
    sum: 0,
    transactionsSum: "0",
  });

  return (
    <CompanyDetailsContext.Provider
      value={[
        [companyDetailsOn, setCompanyDetailsOn],
        [company, setCompany],
        [companyYearData, setCompanyYearData],
      ]}
    >
      {props.children}
    </CompanyDetailsContext.Provider>
  );
};
