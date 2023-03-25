import React, {createContext, useState} from "react";

export const PersonalSpaceContext = createContext();

export const PersonalSpaceProvider = (props) => {
  const [personalSpaceContext, setPersonalSpaceContext] = useState(false);

  return (
    <PersonalSpaceContext.Provider
      value={[personalSpaceContext, setPersonalSpaceContext]}
    >
      {props.children}
    </PersonalSpaceContext.Provider>
  );
};
