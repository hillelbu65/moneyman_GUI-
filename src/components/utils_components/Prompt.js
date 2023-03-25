import {useContext, useEffect} from "react";
import {PromptContext} from "../context/PromptContext";
import {BiMessageSquareX, BiMessageSquareError} from "react-icons/bi";

export default function Prompt({type = "", text = ""}) {
  const [prompt, setPrompt] = useContext(PromptContext);

  useEffect(() => {
    setTimeout(() => {
      setPrompt({type: "", text: "", state: false, time: 4000});
    }, prompt.time);
  }, []);

  return (
    <div className=" fixed bottom-28 flex flex-col justify-end items-center w-full h-fit p-3">
      <div className=" flex flex-row gap-3 justify-end items-center bg-my_soft_cream border-2 border-my_soft_black h-fit w-fit p-3 rounded-md">
        <div className=" text-right">{text}</div>{" "}
        <div className=" text-2xl text-my_pink">
          {type === "error" ? (
            <BiMessageSquareX size={"40"} />
          ) : (
            <BiMessageSquareError />
          )}
        </div>
      </div>
    </div>
  );
}
