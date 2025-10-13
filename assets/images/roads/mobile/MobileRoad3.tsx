import { MobileStyledSvg, SVGDimensions } from '../Road';

export const MobileRoad3 = ({
  isFirst,
  isLast,
  svgDimensions,
}: {
  svgDimensions: SVGDimensions;
  isFirst?: boolean;
  isLast?: boolean;
}) => {
  return (
    <MobileStyledSvg
      $isFirst={isFirst}
      $isLast={isLast}
      viewBox={`0 0 1000 ${svgDimensions.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/*Bottom land*/}
      <path
        className="bottom-land"
        style={{
          transform: `translateY(${svgDimensions.endTransformY}px)`,
        }}
        d="M430 900H570V970C570 986.569 556.569 1000 540 1000H460C443.431 1000 430 986.569 430 970V900Z"
        fill="#C1CAA8"
      />
      {/*Top land*/}
      <path
        className="top-land"
        d="M430 30C430 13.4315 443.431 0 460 0H540C556.569 0 570 13.4315 570 30V100H430V30Z"
        fill="#C1CAA8"
      />
      {/*Middle land*/}
      <path
        className="middle-land"
        d="M192.062 161C192.062 144.431 205.494 131 222.063 131H795.062C811.631 131 825.062 144.431 825.062 161V614C825.062 630.569 811.631 644 795.062 644H222.063C205.494 644 192.062 630.569 192.062 614V161Z"
        fill="#C1CAA8"
      />
      {/*Whole height land*/}
      <path
        className="whole-height-land"
        d={`M430 ${svgDimensions.startY}H570V${svgDimensions.endY}H430V80Z`}
        fill="#C1CAA8"
      />
      {/*Road 2/7*/}
      <path
        className="road-2"
        d={`M472 ${svgDimensions.startY}H528V323C528 327.418 524.418 331 520 331H480C475.582 331 472 327.418 472 323V80Z`}
        fill="#504D44"
      />
      {/*Road 6/7*/}
      <path
        className="road-6"
        d={`M472 491C472 486.582 475.582 483 480 483H520C524.418 483 528 486.582 528 491V${svgDimensions.endY}H472V491Z`}
        fill="#504D44"
      />
      {/*Road 4/7*/}
      <rect
        className="road-4"
        x="394"
        y="276"
        width="56"
        height="263"
        rx="8"
        fill="#504D44"
      />
      {/*Top road*/}
      <rect
        className="top-road"
        x="472"
        y="40"
        width="56"
        height="80"
        rx="8"
        fill="#504D44"
      />
      {/*Road 3/7*/}
      <rect
        className="road-3"
        x="528"
        y="275.303"
        width="56"
        height="133"
        rx="8"
        transform="rotate(90 528 275.303)"
        fill="#504D44"
      />
      {/*Road 5/7*/}
      <rect
        className="road-5"
        x="528"
        y="482.721"
        width="56"
        height="133"
        rx="8"
        transform="rotate(90 528 482.721)"
        fill="#504D44"
      />
      {/*Bottom road*/}
      <rect
        className="bottom-road"
        style={{
          transform: `translateY(${svgDimensions.endTransformY}px)`,
        }}
        x="472"
        y="880"
        width="56"
        height="80"
        rx="8"
        fill="#504D44"
      />
      {/*Yellow line*/}
      <path
        className="yellow-line"
        d={`M500 ${svgDimensions.startY}V304H422V511H500V${svgDimensions.endY}`}
        stroke="#F1F900"
        strokeWidth="5"
        strokeDasharray="12 12"
      />
      {/*Lake*/}
      <g className="lake">
        <rect
          x="493.586"
          y="358"
          width="52.1729"
          height="81"
          rx="26.0865"
          fill="#C5E1E5"
        />
        <rect
          x="476"
          y="382.418"
          width="69.7593"
          height="28.5882"
          rx="14.2941"
          fill="#C5E1E5"
        />
        <rect
          x="484.793"
          y="400.285"
          width="76.2076"
          height="38.7132"
          rx="19.3566"
          fill="#C5E1E5"
        />
        <rect
          x="490.656"
          y="395.523"
          width="24.6209"
          height="2.97794"
          rx="1.48897"
          fill="black"
          fillOpacity="0.07"
        />
        <rect
          x="519.965"
          y="419.344"
          width="24.6209"
          height="2.97794"
          rx="1.48897"
          fill="black"
          fillOpacity="0.07"
        />
      </g>
      {/*Tree top*/}
      <g className="tree-top">
        <path
          d="M578.241 226C580.652 226 582.946 227.556 585.03 230.074L581.905 238.19L587.706 234.008C590.253 238.445 592.329 244.166 593.693 249.68L584.934 256.42L594.566 253.678C595.16 256.838 595.483 259.797 595.483 262.241C595.483 274.202 587.764 283.897 578.241 283.897C568.719 283.897 561 274.202 561 262.241C561 258.157 561.9 252.637 563.465 247.137L568.604 248.934L564.769 243.013C567.928 233.962 572.789 226 578.241 226Z"
          fill="#CA9503"
        />
        <path
          d="M580.454 274.174C580.454 274.174 576.475 286.328 586.422 302.902H569.844C578.685 287.875 576.254 274.174 576.254 274.174L569.844 262.241L576.254 266.439L578.464 247.877L580.454 266.439L589.075 262.241L580.454 274.174Z"
          fill="#8C6006"
        />
      </g>
      {/*Tree middle*/}
      <g className="tree-middle">
        <path
          d="M422.241 161C424.652 161 426.946 162.556 429.03 165.074L425.905 173.19L431.706 169.008C434.253 173.445 436.329 179.166 437.693 184.68L428.934 191.42L438.566 188.678C439.16 191.838 439.483 194.797 439.483 197.241C439.483 209.202 431.764 218.897 422.241 218.897C412.719 218.897 405 209.202 405 197.241C405 193.157 405.9 187.637 407.465 182.137L412.604 183.934L408.769 178.013C411.928 168.962 416.789 161 422.241 161Z"
          fill="#CA6D03"
        />
        <path
          d="M424.454 209.174C424.454 209.174 420.475 221.328 430.422 237.902H413.844C422.685 222.875 420.254 209.174 420.254 209.174L413.844 197.241L420.254 201.439L422.464 182.877L424.454 201.439L433.075 197.241L424.454 209.174Z"
          fill="#8C6006"
        />
      </g>
      {/*Tree bottom*/}
      <g className="tree-bottom">
        <path
          d="M586.351 489.799C588.761 489.799 591.056 491.355 593.139 493.873L590.014 501.989L595.815 497.807C598.362 502.244 600.438 507.965 601.803 513.479L593.044 520.219L602.675 517.476C603.269 520.637 603.592 523.596 603.592 526.04C603.592 538 595.873 547.696 586.351 547.696C576.829 547.696 569.109 538 569.109 526.04C569.109 521.956 570.01 516.436 571.574 510.936L576.714 512.733L572.878 506.812C576.037 497.761 580.898 489.799 586.351 489.799Z"
          fill="#C3CA03"
        />
        <path
          d="M588.563 537.973C588.563 537.973 584.584 550.127 594.531 566.7H577.953C586.795 551.674 584.363 537.973 584.363 537.973L577.953 526.04L584.363 530.238L586.574 511.676L588.563 530.238L597.184 526.04L588.563 537.973Z"
          fill="#8C6006"
        />
      </g>
      {/*Map pointer*/}
      <path
        className="map-pointer"
        d="M497.638 221.801C513.445 221.801 526.26 234.078 526.261 249.223C526.261 264.368 507.477 304.067 497.638 304.067C487.799 304.066 469.016 264.367 469.016 249.223C469.016 234.078 481.83 221.801 497.638 221.801ZM497.638 237.896C490.722 237.896 485.115 243.501 485.115 250.415C485.115 257.329 490.722 262.935 497.638 262.935C504.554 262.935 510.16 257.329 510.16 250.415C510.16 243.501 504.553 237.897 497.638 237.896Z"
        fill="#41E8A5"
      />
    </MobileStyledSvg>
  );
};
