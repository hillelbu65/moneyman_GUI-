import "./App.css";
import Main from "./components/Main";
import Prompt from "./components/utils_components/Prompt";
import {useContext} from "react";
import {PromptContext} from "./components/context/PromptContext";

function App() {
  const [prompt, setPrompt] = useContext(PromptContext);
  return (
    <div className="App">
      <Main />
      {prompt.state ? <Prompt type={prompt.type} text={prompt.text} /> : ""}
    </div>
  );
}

export default App;
