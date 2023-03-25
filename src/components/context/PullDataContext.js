import React, {createContext, useState} from "react";

export const PullDataContext = createContext();

export const PullDataProvider = (props) => {
  const [month, setMonth] = useState(
    "0" + (new Date().getMonth() + 1).toString()
  );
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [sheetName, setSheetName] = useState(
    localStorage.getItem("sheet_name")
  );
  const [sheetId, setSheetId] = useState(localStorage.getItem("sheet_id"));

  return (
    <PullDataContext.Provider
      value={[
        [month, setMonth],
        [year, setYear],
        [sheetName, setSheetName],
        [sheetId, setSheetId],
      ]}
    >
      {props.children}
    </PullDataContext.Provider>
  );
};
