import "./App.css";
import Main from "./components/Main";
import Prompt from "./components/utils_components/Prompt";
import {useContext, useEffect} from "react";
import {PromptContext} from "./components/context/PromptContext";
import {useNavigate} from "react-router-dom";

function App() {
  const [prompt, setPrompt] = useContext(PromptContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("apptype"));
    if (localStorage.getItem("apptype") !== null) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="App">
      <Main />
      {prompt.state ? <Prompt type={prompt.type} text={prompt.text} /> : ""}
    </div>
  );
}

export default App;
