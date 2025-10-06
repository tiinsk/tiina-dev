import { StyledSvg, SVGDimensions } from './Road';

export const Road2 = ({
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
      {/*Top land*/}
      <path
        className="top-land"
        d="M300 30C300 13.4315 313.431 0 330 0H670C686.569 0 700 13.4315 700 30V100H300V30Z"
        fill="#C1CAA8"
      />
      {/*Middle land*/}
      <path
        className="middle-land"
        d="M220 110C220 93.4315 233.431 80 250 80H790C806.569 80 820 93.4315 820 110V450C820 466.569 806.569 480 790 480H250C233.431 480 220 466.569 220 450V110Z"
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
      {/*Whole height land*/}
      <path
        className="whole-height-land"
        d={`M300 ${svgDimensions.startY}H700V${svgDimensions.endY}H300V80Z`}
        fill="#C1CAA8"
      />
      {/*Road 2/7*/}
      <path
        className="road-2"
        d={`M460 ${svgDimensions.startY}H540V217C540 221.418 536.418 225 532 225H468C463.582 225 460 221.418 460 217V80Z`}
        fill="#504D44"
      />
      {/*Tree middle right 1*/}
      <g className="tree-middle-right">
        <rect
          x="716.533"
          y="273.663"
          width="5.53575"
          height="55.3469"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M721.378 210.705C722.41 210.705 726.568 226.755 726.568 226.755L723.772 225.961L732.796 254.703L725.011 248.391L742.137 285.281L734.456 281.822L742.137 312.263L721.378 304.455L696.529 320.524L708.764 281.822L700.619 285.281L716.189 252.153L709.961 254.703L718.839 224.39L716.189 226.755C716.189 226.755 720.347 210.705 721.378 210.705Z"
          fill="#3C5B1A"
        />
      </g>
      {/*Road 6/7*/}
      <path
        className="road-6"
        d={`M460 285C460 280.582 463.582 277 468 277H532C536.418 277 540 280.582 540 285V${svgDimensions.endY}H460V285Z`}
        fill="#504D44"
      />
      {/*Tree middle right 2*/}
      <g className="tree-middle-right">
        <rect
          x="660.613"
          y="297.813"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M661.238 251.839C664.422 251.839 675.41 279.322 675.41 279.322L668.513 276.105L679.879 314.46L672.981 311.354L679.879 338.69L664.447 328.736L642.596 338.69L652.786 308.282L642.596 314.46L654.259 278.59L647.54 279.322C647.54 279.322 658.053 251.839 661.238 251.839Z"
          fill="#3C5B1A"
        />
      </g>
      {/*Tree bottom right*/}
      <g>
        <rect
          className="tree-bottom-right"
          x="598.59"
          y="501.692"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M599.214 455.718C602.399 455.718 613.387 483.201 613.387 483.201L606.49 479.983L617.856 518.339L610.958 515.232L617.856 542.569L602.424 532.615L580.572 542.569L590.762 512.161L580.572 518.339L592.236 482.468L585.516 483.201C585.516 483.201 596.029 455.718 599.214 455.718Z"
          fill="#3C5B1A"
        />
      </g>
      {/*Tree left*/}
      <g className="tree-left">
        <rect
          x="329.289"
          y="292.448"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M329.911 246.474C333.096 246.474 344.084 273.957 344.084 273.957L337.187 270.739L348.553 309.095L341.655 305.988L348.553 333.324L333.121 323.371L311.27 333.324L321.459 302.917L311.27 309.095L322.933 273.224L316.213 273.957C316.213 273.957 326.727 246.474 329.911 246.474Z"
          fill="#3C5B1A"
        />
      </g>
      {/*Tree top right*/}
      <g className="tree-top-right">
        <rect
          x="607.535"
          y="74.2617"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M608.159 28.2871C611.344 28.2871 622.332 55.7707 622.332 55.7707L615.435 52.5528L626.801 90.9081L619.903 87.8018L626.801 115.138L611.369 105.185L589.518 115.138L599.707 84.7305L589.518 90.9081L601.181 55.0378L594.461 55.7707C594.461 55.7707 604.975 28.2871 608.159 28.2871Z"
          fill="#3C5B1A"
        />
      </g>
      {/*Top road*/}
      <rect
        className="top-road"
        x="460"
        y="40"
        width="80"
        height="80"
        rx="8"
        fill="#504D44"
      />
      {/*Road 4/7*/}
      <rect
        className="road-4"
        x="532"
        y="155"
        width="80"
        height="202"
        rx="8"
        fill="#504D44"
      />
      {/*Road 3/7*/}
      <rect
        className="road-3"
        x="612"
        y="155"
        width="70"
        height="152"
        rx="8"
        transform="rotate(90 612 155)"
        fill="#504D44"
      />
      {/*Road 5/7*/}
      <rect
        className="road-5"
        x="612"
        y="276.877"
        width="80"
        height="152"
        rx="8"
        transform="rotate(90 612 276.877)"
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
      {/*Road yellow line*/}
      <path
        className="yellow-line"
        d={`M500 ${svgDimensions.startY}V186H571.999L572 319H500.001V${svgDimensions.endY}`}
        stroke="#F1F900"
        strokeWidth="5"
        strokeDasharray="12 12"
      />
      <path
        className="map-pointer"
        d="M572.683 172.609C588.49 172.609 601.305 184.887 601.306 200.031C601.306 215.176 582.522 254.876 572.683 254.876C562.843 254.875 544.061 215.176 544.061 200.031C544.061 184.887 556.875 172.61 572.683 172.609ZM572.683 188.705C565.767 188.705 560.16 194.31 560.16 201.224C560.16 208.138 565.767 213.743 572.683 213.743C579.598 213.743 585.205 208.138 585.205 201.224C585.205 194.31 579.598 188.705 572.683 188.705Z"
        fill="#FA8435"
      />
    </StyledSvg>
  );
};
