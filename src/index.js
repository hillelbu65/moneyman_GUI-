import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {BrowserRouter} from "react-router-dom";
import {PersonalSpaceProvider} from "./components/context/PersonalSpace";
import {CompanyDetailsProvider} from "./components/context/CompanyDetailsContext";
import {PullDataProvider} from "./components/context/PullDataContext";
import {PromptProvider} from "./components/context/PromptContext";
import {AppTypeProvider} from "./components/context/AppTypeContext";
import {SubCategoryDetailsProvider} from "./components/context/SubCategoryDetailsContext";
import {CompanyDetailsMoneymanProvider} from "./components/context/CompanyDetailsMoneyman";

const root = ReactDOM.createRoot(document.getElementById("root"));
const CLIENT_ID = process.env.REACT_APP_GCP_CLIENT_ID;
root.render(
  <CompanyDetailsMoneymanProvider>
    <PromptProvider>
      <PullDataProvider>
        <CompanyDetailsProvider>
          <PersonalSpaceProvider>
            <SubCategoryDetailsProvider>
              <AppTypeProvider>
                <BrowserRouter>
                  <GoogleOAuthProvider clientId={CLIENT_ID}>
                    <App />
                  </GoogleOAuthProvider>
                </BrowserRouter>
              </AppTypeProvider>
            </SubCategoryDetailsProvider>
          </PersonalSpaceProvider>
        </CompanyDetailsProvider>
      </PullDataProvider>
    </PromptProvider>
  </CompanyDetailsMoneymanProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
