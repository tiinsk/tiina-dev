import { MobileStyledSvg, SVGDimensions } from '../Road';

export const MobileRoad2 = ({
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
      {/*Top land*/}
      <path
        className="top-land"
        d="M430 30C430 13.4315 443.431 0 460 0H540C556.569 0 570 13.4315 570 30V100H430V30Z"
        fill="#C1CAA8"
      />
      {/*Middle land*/}
      <path
        className="middle-land"
        d="M250 110C250 93.4314 263.431 80 280 80H720C736.569 80 750 93.4315 750 110V776C750 792.569 736.569 806 720 806H280C263.431 806 250 792.569 250 776V110Z"
        fill="#C1CAA8"
      />
      {/*Bottom land*/}
      <path
        className="bottom-land"
        style={{
          transform: `translateY(${svgDimensions.endTransformY}px)`,
        }}
        d="M430 900H570V970C570 986.569 556.569 1000 540 1000H460C443.431 1000 430 986.569 430 970V900Z"
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
        d={`M472 ${svgDimensions.startY}H528V207C528 211.418 524.418 215 520 215H480C475.582 215 472 211.418 472 207V80Z`}
        fill="#504D44"
      />
      {/*Road 6/7*/}
      <path
        className="road-6"
        d={`M472 415C472 410.582 475.582 407 480 407H520C524.418 407 528 410.582 528 415V${svgDimensions.endY}H472V415Z`}
        fill="#504D44"
      />
      {/*Tree middle right*/}
      <g className="tree-middle-right">
        <rect
          x="551.016"
          y="545.975"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M551.642 500C554.827 500 565.814 527.484 565.814 527.484L558.918 524.266L570.284 562.621L563.385 559.515L570.284 586.851L554.851 576.897L533 586.851L543.19 556.443L533 562.621L544.664 526.751L537.944 527.484C537.944 527.484 548.457 500 551.642 500Z"
          fill="#3C5B1A"
        />
      </g>
      {/*Tree bottom right*/}
      <g>
        <rect
          x="588.016"
          y="689.975"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M588.642 644C591.827 644 602.814 671.484 602.814 671.484L595.918 668.266L607.284 706.621L600.385 703.515L607.284 730.851L591.851 720.897L570 730.851L580.19 700.443L570 706.621L581.664 670.751L574.944 671.484C574.944 671.484 585.457 644 588.642 644Z"
          fill="#3C5B1A"
        />
      </g>
      {/*Tree left*/}
      <g className="tree-left">
        <rect
          x="471.02"
          y="292.975"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M471.642 247C474.827 247 485.814 274.484 485.814 274.484L478.918 271.266L490.284 309.621L483.385 306.515L490.284 333.851L474.851 323.897L453 333.851L463.19 303.443L453 309.621L464.664 273.751L457.944 274.484C457.944 274.484 468.457 247 471.642 247Z"
          fill="#3C5B1A"
        />
      </g>
      {/*Tree top right*/}
      <g className="tree-top-right">
        <rect
          x="569.02"
          y="77.9746"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M569.642 32C572.827 32 583.814 59.4836 583.814 59.4836L576.918 56.2657L588.284 94.621L581.385 91.5147L588.284 118.851L572.851 108.897L551 118.851L561.19 88.4434L551 94.621L562.664 58.7507L555.944 59.4836C555.944 59.4836 566.457 32 569.642 32Z"
          fill="#3C5B1A"
        />
      </g>
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
      {/*Road 4/7*/}
      <rect
        className="road-4"
        x="528"
        y="159"
        width="56"
        height="304"
        rx="8"
        fill="#504D44"
      />
      {/*Road 3/7*/}
      <rect
        className="road-3"
        x="584"
        y="159"
        width="56"
        height="112"
        rx="8"
        transform="rotate(90 584 159)"
        fill="#504D44"
      />
      {/*Road 5/7*/}
      <rect
        className="road-5"
        x="584"
        y="406.877"
        width="56"
        height="112"
        rx="8"
        transform="rotate(90 584 406.877)"
        fill="#504D44"
      />
      {/*Road 7/7*/}
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
      {/*Road yellow line*/}
      <path
        className="yellow-line"
        d={`M500 ${svgDimensions.startY}V186H557.999L558 437H500.001V${svgDimensions.endY}`}
        stroke="#F1F900"
        strokeWidth="5"
        strokeDasharray="12 12"
      />
      <path
        className="map-pointer"
        d="M557.685 172.609C573.492 172.609 586.307 184.887 586.308 200.031C586.308 215.176 567.524 254.876 557.685 254.876C547.845 254.875 529.062 215.176 529.062 200.031C529.063 184.887 541.877 172.61 557.685 172.609ZM557.685 188.705C550.769 188.705 545.162 194.31 545.162 201.224C545.162 208.138 550.769 213.743 557.685 213.743C564.6 213.743 570.207 208.138 570.207 201.224C570.207 194.31 564.6 188.705 557.685 188.705Z"
        fill="#FA8435"
      />
    </MobileStyledSvg>
  );
};
