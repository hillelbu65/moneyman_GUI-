import React, {createContext, useState} from "react";

export const PromptContext = createContext();

export const PromptProvider = (props) => {
  const [prompt, setPrompt] = useState({
    type: "",
    text: "",
    state: false,
    time: 0,
  });

  return (
    <PromptContext.Provider value={[prompt, setPrompt]}>
      {props.children}
    </PromptContext.Provider>
  );
};
