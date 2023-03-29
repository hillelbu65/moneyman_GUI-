import React from "react";
import Background from "./animations/Background";
import WelcomePage from "./WelcomePage";

export default function Whole() {
  return (
    <div>
      <WelcomePage />
      <Background />
    </div>
  );
}
