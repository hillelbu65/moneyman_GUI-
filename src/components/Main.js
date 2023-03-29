import {Route, Routes} from "react-router";
import MonthOverviewPage from "./app/MonthOverviewPage";
import LoginPage from "./login/LoginPage";
import WelcomePage from "./welcome_page/WelcomePage";
export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/monthoverview" element={<MonthOverviewPage />} />
      </Routes>
    </div>
  );
}
