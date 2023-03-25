import React, {createContext, useState} from "react";

export const CompanyDetailsContext = createContext();

export const CompanyDetailsProvider = (props) => {
  const [billDetailsOn, setBillDetailsOn] = useState(false);
  const [company, setCompany] = useState("");

  return (
    <CompanyDetailsContext.Provider
      value={[
        [billDetailsOn, setBillDetailsOn],
        [company, setCompany],
      ]}
    >
      {props.children}
    </CompanyDetailsContext.Provider>
  );
};
