import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col w-full h-2/3 items-center justify-center text-3xl sm:text-7xl text-my_soft_black font-bold p-4">
      <div className="flex flex-row w-full h-fit justify-center">
        <div className="animate-comeLeft">ממשק ידידותי למשתמשי</div>
      </div>
      <div className="flex flex-row gap-2 w-full h-fit justify-center">
        <div className="animate-comeLeft text-blue-900">כספיון</div>
        <div className="animate-comeLeft">ו</div>
        <div className="animate-comeLeft text-my_green">maneyman</div>
      </div>
    </div>
  );
}
