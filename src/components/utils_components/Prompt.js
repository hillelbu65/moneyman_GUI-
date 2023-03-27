import {useContext, useEffect, useState} from "react";
import {PromptContext} from "../context/PromptContext";
import {BiMessageSquareX, BiMessageSquareError} from "react-icons/bi";

export default function Prompt({type = "", text = ""}) {
  const [style, setStyle] = useState({wrapper: "", content: ""});
  const [prompt, setPrompt] = useContext(PromptContext);

  useEffect(() => {
    setTimeout(() => {
      setPrompt({type: "", text: "", state: false, time: 4000});
    }, prompt.time);
  }, []);

  useEffect(() => {
    if (prompt.type === "error") {
      setStyle({
        wrapper:
          "p-1 bg-gradient-to-l from-my_pink via-my_green to-my_green rounded-md",
        content:
          "flex flex-row gap-3 justify-end items-center bg-my_green h-fit w-fit p-3 rounded-md",
      });
    }
    if (prompt.type === "info") {
      setStyle({
        wrapper: "p-0.5 bg-my_soft_black rounded-md",
        content:
          "flex flex-row gap-3 justify-end items-center bg-my_green h-fit w-fit p-3 rounded-md",
      });
    }
  }, []);

  return (
    <div className=" animate-comeUp delay-100 fixed bottom-28 flex flex-col justify-end items-center w-full h-fit p-3">
      <div className={style.wrapper}>
        <div className={style.content}>
          <div className=" text-right">{text}</div>{" "}
          <div className=" text-2xl text-my_soft_black">
            {type === "error" ? (
              <BiMessageSquareX size={"40"} />
            ) : (
              <BiMessageSquareError size={"40"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
