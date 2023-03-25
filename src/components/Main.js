import {Route, Routes} from "react-router";
import MonthOverviewPage from "./app/MonthOverviewPage";

import LoginPage from "./login/LoginPage";
export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/monthoverview" element={<MonthOverviewPage />} />
      </Routes>
    </div>
  );
}
