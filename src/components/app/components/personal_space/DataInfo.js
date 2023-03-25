import React from "react";
import Input from "../../../utils_components/Input";
export default function DataInfo() {
  return (
    <div className="flex flex-col p-3">
      <span className="flex flex-row justify-end font-bold text-2xl mr-2 ">
        (בלבד Google Sheets) פרטי הגליון
      </span>
      <span className="flex flex-row justify-end mr-2">
        <div>
          <span className="flex flex-row justify-end">
            {" "}
            עדכנו את המידע על ידי מחיקתו וכתיבה מחדש
          </span>
          <span className="flex flex-row justify-end"> (יש לרענן את הדף)</span>
        </div>
      </span>
      <div class="flex flex-col p-3 gap-2">
        <Input name="sheet_id" header="של הגיליון ID" />
        <Input name="sheet_name" header="שם של הגיליון" />
      </div>
    </div>
  );
}
