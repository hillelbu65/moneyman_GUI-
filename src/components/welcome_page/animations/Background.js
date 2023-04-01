import React from "react";
import {motion} from "framer-motion";
import {BiShekel} from "react-icons/bi";

export default function Background() {
  return (
    <div className="flex flex-col w-screen h-screen z-0 p-1 gap-1">
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#46C36C"}}
        transition={{duration: 20, delay: 6, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        50
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#F45B69"}}
        transition={{duration: 17, delay: 14, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        50
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#46C36C"}}
        transition={{duration: 10, delay: 6, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        50
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#46C36C"}}
        transition={{duration: 10, delay: 0.5, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        560
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#46C36C"}}
        transition={{duration: 20, delay: 3.5, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        1000
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#F45B69"}}
        transition={{duration: 20, delay: 0, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        68
      </motion.div>{" "}
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#46C36C"}}
        transition={{duration: 20, delay: 1, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        16
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#F45B69"}}
        transition={{duration: 17, delay: 3, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        78
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#F45B69"}}
        transition={{duration: 20, delay: 17, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        180
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#46C36C"}}
        transition={{duration: 17, delay: 6, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        55
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#F45B69"}}
        transition={{duration: 17, delay: 8.2, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        10
      </motion.div>
      <motion.div
        className="flex h-10 w-20 rounded-md justify-center items-center text-my_soft_cream"
        initial={{x: "-100vw", backgroundColor: "#F6E8EA"}}
        animate={{x: "110vw", backgroundColor: "#46C36C"}}
        transition={{duration: 17, delay: 7, repeat: Infinity}}
      >
        <div className="mt-0.5">
          <BiShekel />
        </div>{" "}
        45
      </motion.div>{" "}
    </div>
  );
}
