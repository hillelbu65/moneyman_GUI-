import React from "react";
import {animated, useSpring} from "@react-spring/web";

export default function Loader() {
  const h1 = useSpring({
    from: {y: -100},
    to: {y: 0},
  });
  const h2 = useSpring({
    from: {y: 100},
    to: {y: 0},
  });
  const upArrow = useSpring({
    from: {y: -100},
    to: {y: 0},
    loop: true,
  });
  const downArrow = useSpring({
    from: {y: 150},
    to: {y: 0},
    loop: true,
  });

  return (
    <div className=" flex justify-center items-center w-full h-full fixed z-50 bg-black/40 bg-my_blue">
      <svg
        width="300"
        height="300"
        viewBox="0 0 860 860"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 8">
          <path
            id="path432"
            d="M858.201 403.303C865.14 516.857 826.744 628.525 751.439 713.8C676.134 799.074 570.073 850.989 456.533 858.149C342.993 865.309 231.25 827.131 145.829 751.992C60.4079 676.853 8.28712 570.893 0.905757 457.368C-6.47559 343.842 31.4856 232.025 106.458 146.457C181.43 60.8901 287.288 8.56316 400.8 0.960843C514.311 -6.64146 626.202 31.1019 711.915 105.908C797.628 180.713 850.161 286.469 857.984 399.966"
            fill="#266DD3"
          />
          <animated.path
            style={{
              width: 80,
              height: 80,
              background: "#ff6d6d",
              borderRadius: 8,
              ...h2,
            }}
            id="h2"
            d="M620.412 488.677C619.553 573.525 550.074 641.613 465.226 640.754L437.406 640.473C406.479 640.16 382.492 631.108 365.445 613.317C348.006 595.522 339.446 570.966 339.762 539.647L341.532 364.742C341.746 343.55 358.365 326.159 379.526 324.984V324.984C402.744 323.694 422.216 342.303 421.981 365.556L420.325 529.304C420.206 541.048 423.245 550.28 429.441 556.998C435.637 563.717 444.216 567.132 455.178 567.242V567.242C501.555 567.712 539.531 530.496 540 484.119L541.187 366.762C541.402 345.57 558.021 328.179 579.181 327.004V327.004C602.4 325.714 621.872 344.322 621.637 367.575L620.412 488.677Z"
            fill="white"
          />
          <animated.path
            style={{
              width: 80,
              height: 80,
              background: "#ff6d6d",
              borderRadius: 8,
              ...h1,
            }}
            id="h1"
            d="M518.47 373.126C519.329 288.277 451.24 218.797 366.391 217.938L338.571 217.657C307.643 217.344 283.478 225.909 266.074 243.352C248.279 260.79 239.223 285.169 238.906 316.488L237.137 491.396C236.922 512.588 253.186 530.311 274.319 531.915V531.915C297.507 533.674 317.352 515.463 317.587 492.209L319.244 328.459C319.362 316.715 322.587 307.546 328.918 300.954C335.25 294.363 343.896 291.122 354.858 291.233V291.233C401.235 291.702 438.451 329.679 437.982 376.056L436.795 493.415C436.58 514.608 452.844 532.331 473.977 533.934V533.934C497.165 535.693 517.01 517.483 517.245 494.229L518.47 373.126Z"
            fill="white"
          />
          <animated.g
            id="upArrow"
            style={{
              width: 80,
              height: 80,
              background: "#ff6d6d",
              borderRadius: 8,
              ...upArrow,
            }}
          >
            <path
              id="path5019-8"
              d="M569.219 302.434C550.965 303.433 538.341 284.471 546.304 268.015L558.66 242.482C567.341 224.543 592.839 224.387 601.738 242.219L613.813 266.416C621.522 281.863 610.889 300.153 593.65 301.097L569.219 302.434Z"
              fill="#38A3A5"
              fill-opacity="0.53"
            />
            <path
              id="path5019-8_2"
              d="M560.819 308.542C542.565 309.542 529.941 290.58 537.904 274.124L558.756 231.031C567.437 213.092 592.935 212.936 601.834 230.769L622.213 271.605C629.922 287.052 619.288 305.342 602.05 306.286L560.819 308.542Z"
              fill="#38A3A5"
              fill-opacity="0.53"
            />
            <path
              id="path5019-8_3"
              d="M576.116 297.855C557.856 298.853 545.233 279.879 553.209 263.423L558.587 252.326C567.273 234.405 592.748 234.25 601.652 252.064L606.908 262.579C614.63 278.028 603.996 296.331 586.75 297.274L576.116 297.855Z"
              fill="#38A3A5"
            />
          </animated.g>
          <animated.g
            id="downArrow"
            style={{
              width: 80,
              height: 80,
              background: "#ff6d6d",
              borderRadius: 8,
              ...downArrow,
            }}
          >
            <path
              id="path5019-8_4"
              d="M297.43 544.367C315.637 543.358 328.275 562.22 320.415 578.675L307.463 605.792L298.376 624.816C289.737 642.902 264.047 643.057 255.19 625.077L233.652 581.352C226.05 565.92 236.676 547.736 253.852 546.784L297.43 544.367Z"
              fill="#DB5461"
              fill-opacity="0.49"
            />
            <path
              id="path5019-8_5"
              d="M288.882 550.728C307.102 549.722 319.736 568.613 311.846 585.068L303.267 602.962L298.458 612.991C289.807 631.034 264.173 631.189 255.304 613.252L242.22 586.792C234.587 571.355 245.215 553.141 262.41 552.191L288.882 550.728Z"
              fill="#DB5461"
              fill-opacity="0.75"
            />
            <path
              id="path5019-8_6"
              d="M276.838 559.923C295.063 558.918 307.695 577.818 299.796 594.273L297.323 599.425V599.425C289.184 616.381 265.093 616.527 256.748 599.671L254.27 594.666C246.628 579.228 257.256 561.004 274.457 560.055L276.838 559.923Z"
              fill="#DB5461"
            />
          </animated.g>
        </g>
      </svg>
    </div>
  );
}
