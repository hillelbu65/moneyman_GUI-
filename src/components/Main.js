import {Route, Routes} from "react-router";
import MonthOverviewPage from "./app/MonthOverviewPage";
import MonthOverviewPageMoneyman from "./app_moneyman_type/MonthOverviewPageMoneyman";
import LoginPage from "./login/LoginPage";
import Whole from "./welcome_page/Whole";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Whole />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/monthoverview" element={<MonthOverviewPage />} />
        <Route
          path="/monthoverview_moneyman"
          element={<MonthOverviewPageMoneyman />}
        />
      </Routes>
    </div>
  );
}
