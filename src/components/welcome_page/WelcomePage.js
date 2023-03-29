import React, {useContext, useEffect} from "react";
import {PromptContext} from "../context/PromptContext";
import Hero from "./hero/Hero";
import SelectionsPage from "./selection/SelectionsPage";
import TopBar from "./top_bar/TopBar";

export default function WelcomePage() {
  const [prompt, setPrompt] = useContext(PromptContext);
  useEffect(() => {
    setPrompt({
      type: "",
      text: "",
      state: false,
      time: 0,
    });
  }, []);
  return (
    <div className=" flex flex-col w-screen h-screen">
      <TopBar />
      <Hero />
      <SelectionsPage />
    </div>
  );
}
