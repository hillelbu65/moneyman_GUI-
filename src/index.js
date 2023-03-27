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

const root = ReactDOM.createRoot(document.getElementById("root"));
const CLIENT_ID = process.env.REACT_APP_GCP_CLIENT_ID;
const SCOPE = process.env.REACT_APP_GCP_SCOPE;
root.render(
  <PromptProvider>
    <PullDataProvider>
      <CompanyDetailsProvider>
        <PersonalSpaceProvider>
          <BrowserRouter>
            <GoogleOAuthProvider clientId={CLIENT_ID} scope={SCOPE}>
              <App />
            </GoogleOAuthProvider>
          </BrowserRouter>
        </PersonalSpaceProvider>
      </CompanyDetailsProvider>
    </PullDataProvider>
  </PromptProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
