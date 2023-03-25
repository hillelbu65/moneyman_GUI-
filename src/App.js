import "./App.css";
import {useGoogleLogin} from "@react-oauth/google";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
