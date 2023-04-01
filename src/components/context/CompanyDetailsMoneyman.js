import React, {createContext, useState} from "react";

export const CompanyDetailsMoneyman = createContext();

export const CompanyDetailsMoneymanProvider = (props) => {
  const [companyDetailsOn, setCompanyDetailsOn] = useState(false);
  const [company, setCompany] = useState("");
  const [companyYearData, setCompanyYearData] = useState({
    data: [
      {
        transactions: [
          {category: "", month: "03", companyInfo: {logoUrl: "", url: ""}},
        ],
      },
    ],
    sum: 0,
    transactionsSum: "0",
  });

  return (
    <CompanyDetailsMoneyman.Provider
      value={[
        [companyDetailsOn, setCompanyDetailsOn],
        [company, setCompany],
        [companyYearData, setCompanyYearData],
      ]}
    >
      {props.children}
    </CompanyDetailsMoneyman.Provider>
  );
};
