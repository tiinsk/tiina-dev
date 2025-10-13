import { StyledSvg, SVGDimensions } from './Road';

export const Road4 = ({
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
          transform: `translateY(${svgDimensions.endTransformY}px)`,
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
        d="M102.861 218C102.861 201.431 116.293 188 132.861 188H848.861C865.43 188 878.861 201.431 878.861 218V523C878.861 539.569 865.43 553 848.861 553H132.861C116.293 553 102.861 539.569 102.861 523V218Z"
        fill="#C1CAA8"
      />
      {/*Road 2/7*/}
      <path
        className="road-2"
        d={`M460 ${svgDimensions.startY}H540V342C540 346.418 536.418 350 532 350H468C463.582 350 460 346.418 460 342V80Z`}
        fill="#504D44"
      />
      {/*Road 6/7*/}
      <path
        className="road-6"
        d={`M460 461C460 456.582 463.582 453 468 453H532C536.418 453 540 456.582 540 461V${svgDimensions.endY}H460V461Z`}
        fill="#504D44"
      />
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
      {/*Bottom road*/}
      <rect
        className="bottom-road"
        style={{
          transform: `translateY(${svgDimensions.endTransformY}px)`,
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
        x="596.818"
        y="270"
        width="80"
        height="263"
        rx="8"
        fill="#504D44"
      />
      {/*Road 3*/}
      <rect
        className="road-3"
        x="677"
        y="270.108"
        width="80"
        height="217"
        rx="8"
        transform="rotate(90 677 270.108)"
        fill="#504D44"
      />
      {/*Road 5/7*/}
      <rect
        className="road-5"
        x="677"
        y="453.257"
        width="80"
        height="217"
        rx="8"
        transform="rotate(90 677 453.257)"
        fill="#504D44"
      />
      {/*Yellow line*/}
      <path
        className="yellow-line"
        d={`M500 ${svgDimensions.startY}V307.164H635.49V494.44H500V${svgDimensions.endY}`}
        stroke="#F1F900"
        strokeWidth="5"
        strokeDasharray="12 12"
      />
      {/*Mountain*/}
      <g className="mountain">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M785.632 210.706L721.075 137.766L692.125 210.706H785.632Z"
          fill="#787D7F"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M785.629 210.706L721.072 137.766L726.391 156.69L719.985 153.341L724.877 165.414L718.251 161.18L717.088 183.472L707.072 210.706H785.629Z"
          fill="#969FA2"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M635.537 210.903L676.168 146.215L728.142 210.933L635.537 210.903Z"
          fill="#787D7F"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M662.213 210.933L672.056 203.856L676.65 188.074L681.179 190.021L677.132 169.109L680.189 170.642L676.65 155.266L681.179 158.679L676.169 146.215L728.143 210.933H662.213Z"
          fill="#969FA2"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M676.937 210.984L634.653 153.254L609.355 210.984H676.937Z"
          fill="#787D7F"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M676.941 210.984L634.748 153.254L634.816 177.895L629.931 175.662L635.333 192.917L629.278 194.671L627.529 203.561L622.088 210.984H676.941Z"
          fill="#969FA2"
        />
      </g>
      {/*Map marker*/}
      <path
        className="map-marker"
        d="M634.489 227.187C650.297 227.187 663.112 239.464 663.112 254.608C663.112 269.753 644.328 309.453 634.489 309.453C624.65 309.452 605.867 269.753 605.867 254.608C605.867 239.464 618.682 227.187 634.489 227.187ZM634.491 243.282C627.575 243.282 621.969 248.887 621.969 255.801C621.969 262.715 627.575 268.32 634.491 268.32C641.407 268.32 647.014 262.715 647.014 255.801C647.013 248.887 641.407 243.282 634.491 243.282Z"
        fill="#4084E9"
      />
      {/*Tree top right*/}
      <g className="tree-top-right">
        <rect
          x="768.582"
          y="225.762"
          width="5.53575"
          height="55.3469"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M773.429 162.804C774.461 162.804 778.619 178.853 778.619 178.853L775.823 178.06L784.847 206.802L777.062 200.49L794.188 237.38L786.507 233.921L794.188 264.361L773.429 256.554L748.58 272.623L760.815 233.921L752.67 237.38L768.239 204.252L762.012 206.802L770.89 176.488L768.239 178.853C768.239 178.853 772.398 162.804 773.429 162.804Z"
          fill="#2A6A81"
        />
      </g>
      {/*Tree bottom right*/}
      <g className="tree-bottom-right">
        <rect
          x="756.588"
          y="419.812"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M757.21 373.836C760.395 373.836 771.383 401.32 771.383 401.32L764.486 398.102L775.852 436.457L768.954 433.351L775.852 460.687L760.42 450.733L738.568 460.687L748.758 430.279L738.568 436.457L750.232 400.587L743.512 401.32C743.512 401.32 754.025 373.836 757.21 373.836Z"
          fill="#2A6A81"
        />
      </g>
      {/*Tree bottom left*/}
      <g className="tree-bottom-left">
        <rect
          x="391.006"
          y="359.005"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M391.628 313.03C394.813 313.03 405.801 340.514 405.801 340.514L398.904 337.296L410.27 375.651L403.372 372.545L410.27 399.881L394.838 389.928L372.986 399.881L383.176 369.474L372.986 375.651L384.65 339.781L377.93 340.514C377.93 340.514 388.443 313.03 391.628 313.03Z"
          fill="#2A6A81"
        />
      </g>
      {/*Tree top left*/}
      <g className="tree-top-left">
        <rect
          x="297.982"
          y="296.41"
          width="4.97115"
          height="49.702"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M298.607 250.436C301.791 250.436 312.779 277.919 312.779 277.919L305.883 274.701L317.248 313.057L310.35 309.95L317.248 337.286L301.816 327.333L279.965 337.286L290.155 306.879L279.965 313.057L291.628 277.186L284.909 277.919C284.909 277.919 295.422 250.436 298.607 250.436Z"
          fill="#2A6A81"
        />
      </g>
      {/*Lake*/}
      <g className="lake">
        <rect
          width="166.369"
          height="75.7089"
          rx="35"
          transform="matrix(1 0 0 -1 181.574 438.219)"
          fill="#CBDADD"
        />

        <rect
          width="70.0365"
          height="74.1705"
          rx="35"
          transform="matrix(1 0 0 -1 197.23 390.777)"
          fill="#CBDADD"
        />

        <rect
          width="27.685"
          height="4.57842"
          rx="2.28921"
          transform="matrix(1 0 0 -1 216.51 349.572)"
          fill="white"
          fillOpacity="0.22"
        />

        <rect
          width="56.6884"
          height="4.57842"
          rx="2.28921"
          transform="matrix(1 0 0 -1 260.045 407.261)"
          fill="white"
          fillOpacity="0.22"
        />
      </g>
    </StyledSvg>
  );
};
