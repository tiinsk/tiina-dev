import { StyledSvg, SVGDimensions } from './Road';

export const Road1 = ({
  isFirst,
  isLast,
  svgDimensions,
}: {
  svgDimensions: SVGDimensions;
  isFirst?: boolean;
  isLast?: boolean;
}) => {
  return (
    <StyledSvg
      $isFirst={isFirst}
      $isLast={isLast}
      viewBox={`0 0 1000 ${svgDimensions.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*Whole height land*/}
      <path
        className="whole-height-land"
        d={`M300 ${svgDimensions.startY}H700V${svgDimensions.endY}H300V80Z`}
        fill="#C1CAA8"
      />
      {/*Bottom land*/}
      <path
        className="bottom-land"
        style={{
          transform: `translateY(-${svgDimensions.endTransformY}px)`,
        }}
        d="M300 900H700V970C700 986.569 686.569 1000 670 1000H330C313.431 1000 300 986.569 300 970V900Z"
        fill="#C1CAA8"
      />
      {/*Top land*/}
      <path
        className="top-land"
        d="M300 30C300 13.4315 313.431 0 330 0H670C686.569 0 700 13.4315 700 30V100H300V30Z"
        fill="#C1CAA8"
      />
      {/*Middle land*/}
      <path
        className="middle-land"
        d="M100 200C100 183.431 113.431 170 130 170H970C986.569 170 1000 183.431 1000 200V480C1000 496.569 986.569 510 970 510H130C113.431 510 100 496.569 100 480V200Z"
        fill="#C1CAA8"
      />
      {/*Left tree*/}
      <g className="tree-left">
        <path
          d="M260.241 374C262.652 374 264.946 375.383 267.03 377.621L263.905 384.834L269.706 381.117C272.253 385.061 274.329 390.145 275.693 395.045L266.934 401.036L276.566 398.598C277.16 401.407 277.483 404.036 277.483 406.209C277.483 416.838 269.764 425.455 260.241 425.455C250.719 425.455 243 416.838 243 406.209C243 402.579 243.9 397.673 245.465 392.786L250.604 394.382L246.769 389.12C249.928 381.076 254.789 374 260.241 374Z"
          fill="#6A9838"
        />
        <path
          d="M262.452 416.813C262.452 416.813 258.473 427.615 268.42 442.345H251.842C260.684 428.99 258.252 416.813 258.252 416.813L251.842 406.208L258.252 409.939L260.462 393.442L262.452 409.939L271.073 406.208L262.452 416.813Z"
          fill="#8C6006"
        />
      </g>
      {/*Road 2/7*/}
      <path
        className="road-2"
        d={`M460 ${svgDimensions.startY}H540V294C540 298.418 536.418 302 532 302H468C463.582 302 460 298.418 460 294V80Z`}
        fill="#504D44"
      />
      {/*Road 6/7*/}
      <path
        className="road-6"
        d={`M460 402C460 397.582 463.582 394 468 394H532C536.418 394 540 397.582 540 402V${svgDimensions.endY}H460V402Z`}
        fill="#504D44"
      />
      {/*Road 1/7*/}
      <rect
        className="top-road"
        x="460"
        y="40"
        width="80"
        height="80"
        rx="8"
        fill="#504D44"
      />
      {/*Road 7/7*/}
      <rect
        className="bottom-road"
        style={{
          transform: `translateY(-${svgDimensions.endTransformY}px)`,
        }}
        x="460"
        y="880"
        width="80"
        height="80"
        rx="8"
        fill="#504D44"
      />
      {/*Road 4/7*/}
      <rect
        className="road-4"
        x="631.818"
        y="222"
        width="80"
        height="252"
        rx="8"
        fill="#504D44"
      />
      {/*Road 3/7*/}
      <rect
        className="road-3"
        x="712"
        y="222"
        width="80"
        height="252"
        rx="8"
        transform="rotate(90 712 222)"
        fill="#504D44"
      />
      {/*Road 5/7*/}
      <rect
        className="road-5"
        x="712"
        y="393.713"
        width="80"
        height="252"
        rx="8"
        transform="rotate(90 712 393.713)"
        fill="#504D44"
      />
      {/*Road yellow line*/}
      <path
        className="yellow-line"
        d={`M500 ${svgDimensions.startY}V260H669V434H500V${svgDimensions.endY}`}
        stroke="#F1F900"
        strokeWidth="5"
        strokeDasharray="12 12"
      />
      {/*Lake*/}
      <g className="lake">
        <rect
          x="319.17"
          y="321.062"
          width="207.513"
          height="60.398"
          rx="30.199"
          fill="#5E99A2"
        />
        <rect
          x="338.697"
          y="358.909"
          width="87.3574"
          height="59.1707"
          rx="29.5853"
          fill="#5E99A2"
        />
        <rect
          x="362.746"
          y="391.783"
          width="34.5318"
          height="3.65251"
          rx="1.82626"
          fill="white"
          fillOpacity="0.22"
        />
        <rect
          x="417.047"
          y="345.761"
          width="70.7081"
          height="3.65251"
          rx="1.82626"
          fill="white"
          fillOpacity="0.22"
        />
      </g>
      {/*Mountain*/}
      <g className="mountain">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M383.075 298.664L298.208 213.446L260.15 298.664H383.075Z"
          fill="#787D7F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M383.067 298.664L298.2 213.446L305.193 235.557L296.772 231.644L303.203 245.749L294.493 240.802L292.963 266.846L279.797 298.664H383.067Z"
          fill="#969FA2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M185.756 298.893L239.169 223.316L307.494 298.929L185.756 298.893Z"
          fill="#787D7F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M220.826 298.929L233.766 290.66L239.806 272.222L245.759 274.496L240.439 250.064L244.458 251.856L239.806 233.891L245.759 237.879L239.172 223.316L307.497 298.929H220.826Z"
          fill="#969FA2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M240.184 298.989L184.598 231.541L151.342 298.989H240.184Z"
          fill="#787D7F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M240.186 298.989L184.719 231.541L184.808 260.33L178.387 257.721L185.488 277.88L177.529 279.93L175.23 290.317L168.076 298.989H240.186Z"
          fill="#969FA2"
        />
      </g>
      {/*Tree top right*/}
      <g className="tree-top-right">
        <path
          d="M610.349 103.775C612.759 103.775 615.054 105.158 617.137 107.396L614.012 114.609L619.814 110.892C622.36 114.836 624.436 119.92 625.801 124.821L617.042 130.811L626.673 128.373C627.267 131.182 627.59 133.812 627.59 135.984C627.59 146.614 619.871 155.231 610.349 155.231C600.827 155.231 593.107 146.614 593.107 135.984C593.107 132.355 594.008 127.449 595.572 122.561L600.712 124.157L596.876 118.895C600.035 110.851 604.896 103.775 610.349 103.775Z"
          fill="#6A9838"
        />
        <path
          d="M612.561 146.59C612.561 146.59 608.582 157.391 618.529 172.121H601.951C610.793 158.766 608.361 146.59 608.361 146.59L601.951 135.984L608.361 139.716L610.572 123.219L612.561 139.716L621.182 135.984L612.561 146.59Z"
          fill="#8C6006"
        />
      </g>
      {/*Tree bottom right*/}
      <g className="tree-bottom-right">
        <path
          d="M771.351 294.506C773.761 294.506 776.056 295.889 778.139 298.127L775.014 305.339L780.816 301.623C783.362 305.566 785.438 310.651 786.803 315.551L778.044 321.541L787.675 319.104C788.269 321.913 788.592 324.542 788.592 326.714C788.592 337.344 780.873 345.961 771.351 345.961C761.829 345.961 754.109 337.344 754.109 326.714C754.109 323.085 755.01 318.179 756.574 313.291L761.714 314.888L757.878 309.626C761.037 301.582 765.898 294.506 771.351 294.506Z"
          fill="#6A9838"
        />
        <path
          d="M773.563 337.32C773.563 337.32 769.584 348.122 779.531 362.851H762.953C771.795 349.497 769.363 337.32 769.363 337.32L762.953 326.715L769.363 330.446L771.574 313.949L773.563 330.446L782.184 326.715L773.563 337.32Z"
          fill="#8C6006"
        />
      </g>
      <path
        className="map-pointer"
        d="M668.486 201.73C682.535 201.731 693.924 212.642 693.924 226.102C693.924 239.561 677.23 274.843 668.486 274.844C659.742 274.844 643.049 239.561 643.049 226.102C643.049 212.642 654.438 201.73 668.486 201.73ZM668.486 216.035C662.34 216.035 657.357 221.016 657.357 227.161C657.357 233.306 662.34 238.287 668.486 238.287C674.633 238.287 679.615 233.306 679.615 227.161C679.615 221.017 674.633 216.035 668.486 216.035Z"
        fill="#EE5E5E"
      />
    </StyledSvg>
  );
};
