import React, {createContext, useState} from "react";

export const SubCategoryDetailsContext = createContext();

export const SubCategoryDetailsProvider = (props) => {
  const [subCategoryDetailsOn, setSubCategoryDetailsOn] = useState(false);
  const [subCategory, setSubCategory] = useState("");
  const [companies, setCompanies] = useState([
    {category: "", companyInfo: {logoUrl: "", url: ""}},
  ]);

  return (
    <SubCategoryDetailsContext.Provider
      value={[
        [subCategoryDetailsOn, setSubCategoryDetailsOn],
        [subCategory, setSubCategory],
        [companies, setCompanies],
      ]}
    >
      {props.children}
    </SubCategoryDetailsContext.Provider>
  );
};
