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
    <div className=" animate-comeUp delay-100 fixed bottom-28 flex flex-col justify-end items-center w-full h-fit p-3">
      <div className="p-1 bg-gradient-to-l from-my_pink via-my_green to-my_green rounded-md">
        <div className="flex flex-row gap-3 justify-end items-center bg-my_green  h-fit w-fit p-3 rounded-md">
          <div className=" text-right">{text}</div>{" "}
          <div className=" text-2xl text-my_soft_black">
            {type === "error" ? (
              <BiMessageSquareX size={"40"} />
            ) : (
              <BiMessageSquareError />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
