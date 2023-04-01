import React, {useContext, useEffect, useState} from "react";
import Svg from "./animation/Svg";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";
import LoadingCompanyCard from "./animation/LoadingCompanyCard";
import Notfound from "./animation/Notfound";
import SubCategory from "./SubCategory";

const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0;
  const slideTimer = setInterval(() => {
    element.scrollLeft += step;
    scrollAmount += Math.abs(step);
    if (scrollAmount >= distance) {
      clearInterval(slideTimer);
    }
  }, speed);
};

export default function Category(props) {
  const [scrollingLeft, setScrollingLeft] = useState(0);
  const [visR, setVisR] = useState(false);
  const [visL, setVisL] = useState(true);
  const [scrollingR, setScrollingR] = useState(false);
  const [scrollingL, setScrollingL] = useState(false);
  const contentWrapper = React.useRef(null);

  const subCategories = props.subCategories.map((category, index) => {
    if (category.sum === 0) {
      return <LoadingCompanyCard />;
    } else {
      return (
        <SubCategory
          key={index}
          sum={category.sum}
          category={category.category}
          companies={category.companies}
        />
      );
    }
  });

  //Scrolling handling.
  useEffect(() => {
    if (scrollingL) {
      const interval = setInterval(() => {
        sideScroll(contentWrapper.current, 25, 100, -20);
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  });

  useEffect(() => {
    if (scrollingR) {
      const interval = setInterval(() => {
        sideScroll(contentWrapper.current, 25, 100, 20);
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  });

  useEffect(() => {
    let maxScrollLeft =
      contentWrapper.current.scrollWidth -
      (contentWrapper.current.clientWidth + 100);
    let max = maxScrollLeft * -1;
    if (scrollingLeft > max) {
      setVisL(true);
    } else if (scrollingLeft < max) {
      setVisL(false);
    }
  });

  useEffect(() => {
    if (scrollingLeft > -100) {
      setVisR(false);
    } else if (scrollingLeft < -100) {
      setVisR(true);
    }
  });
  //Scrolling handling.

  return (
    <div className="category mb-3 flex flex-col ">
      <div className="flex flex-row p-1 gap-7 items-center">
        <div className="flex  h-full  mr-0 justify-end w-full  self-end font-bold text-2xl sm:text-3xl text-my_soft_black">
          <div className="flex flex-row justify-center items-center h-full pb-1 pr-3 gap-2">
            {props.subCategories[0].transactions[0].category}
            <div className="mt-1">{props.icon}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-end">
        {visL ? (
          <div className="flex flex-row w-fit items-center justify-start p-1 ">
            <button
              onClick={() => sideScroll(contentWrapper.current, 25, 100, -10)}
              onMouseDown={() => setScrollingL(true)}
              onMouseUp={() => setScrollingL(false)}
              onTouchStart={() => setScrollingL(true)}
              onTouchEnd={() => setScrollingL(false)}
            >
              <div className="flex flex-row justify-center rounded-md items-center w-10 h-10 bg-my_green/80 border-2 border-my_soft_black hover:bg-my_soft_cream">
                {" "}
                <BiChevronLeft />
              </div>
            </button>
          </div>
        ) : (
          ""
        )}

        <div
          className="flex flex-row overflow-x-auto w-full h-32 place-items-center"
          style={{direction: "rtl"}}
          ref={contentWrapper}
          onScroll={(e) => setScrollingLeft(e.target.scrollLeft)}
        >
          {subCategories}
        </div>

        {visR ? (
          <div className="flex flex-row w-fit items-center justify-start p-1 ">
            <button
              onClick={() => sideScroll(contentWrapper.current, 25, 100, 10)}
              onTouchStart={() => setScrollingR(true)}
              onTouchEnd={() => setScrollingR(false)}
              onMouseDown={() => setScrollingR(true)}
              onMouseUp={() => setScrollingR(false)}
            >
              <div className="flex flex-row justify-center rounded-md items-center w-10 h-10 bg-my_green/80 border-2 border-my_soft_black hover:bg-my_soft_cream">
                {" "}
                <BiChevronRight />
              </div>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
