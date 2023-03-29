import React, {createContext, useState} from "react";

export const AppTypeContext = createContext();

export const AppTypeProvider = (props) => {
  const [appTypeContext, setAppTypeContext] = useState("");

  return (
    <AppTypeContext.Provider value={[appTypeContext, setAppTypeContext]}>
      {props.children}
    </AppTypeContext.Provider>
  );
};
