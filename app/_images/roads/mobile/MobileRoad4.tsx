import { MobileStyledSvg, SVGDimensions } from '../Road';

export const MobileRoad4 = ({
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
      {/*Whole height land*/}
      <path
        className="whole-height-land"
        d={`M430 ${svgDimensions.startY}H570V${svgDimensions.endY}H430V80Z`}
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
      {/*Top land*/}
      <path
        className="top-land"
        d="M430 30C430 13.4315 443.431 0 460 0H540C556.569 0 570 13.4315 570 30V100H430V30Z"
        fill="#C1CAA8"
      />
      {/*Middle land*/}
      <path
        className="middle-land"
        d="M243.859 218C243.859 201.431 257.291 188 273.859 188H743.859C760.428 188 773.859 201.431 773.859 218V688C773.859 704.569 760.428 718 743.859 718H273.859C257.291 718 243.859 704.569 243.859 688V218Z"
        fill="#C1CAA8"
      />
      {/*Road 2/7*/}
      <path
        className="road-2"
        d={`M472 ${svgDimensions.startY}H528V328C528 332.418 524.418 336 520 336H480C475.582 336 472 332.418 472 328V80Z`}
        fill="#504D44"
      />
      {/*Road 6/7*/}
      <path
        className="road-6"
        d={`M472 473C472 468.582 475.582 465 480 465H520C524.418 465 528 468.582 528 473V${svgDimensions.endY}H472V473Z`}
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
      {/*Road 4/7*/}
      <rect
        className="road-4"
        x="542.82"
        y="280"
        width="56"
        height="241"
        rx="8"
        fill="#504D44"
      />
      {/*Road 3*/}
      <rect
        className="road-3"
        x="599"
        y="280.109"
        width="56"
        height="127"
        rx="8"
        transform="rotate(90 599 280.109)"
        fill="#504D44"
      />
      {/*Road 5/7*/}
      <rect
        className="road-5"
        x="599"
        y="465.258"
        width="56"
        height="127"
        rx="8"
        transform="rotate(90 599 465.258)"
        fill="#504D44"
      />
      {/*Yellow line*/}
      <path
        className="yellow-line"
        d={`M500 ${svgDimensions.startY}V307.164H570V494.44H500V${svgDimensions.endY}`}
        stroke="#F1F900"
        strokeWidth="5"
        strokeDasharray="12 12"
      />
      {/*Mountain*/}
      <g className="mountain">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M653.631 208.277L606.478 155L585.332 208.277H653.631Z"
          fill="#787D7F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M653.629 208.277L606.475 155L610.361 168.823L605.681 166.377L609.255 175.195L604.415 172.102L603.565 188.385L596.25 208.277H653.629Z"
          fill="#969FA2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M544 208.421L573.677 161.172L611.64 208.444L544 208.421Z"
          fill="#787D7F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M563.484 208.444L570.674 203.274L574.03 191.747L577.338 193.169L574.381 177.894L576.615 179.014L574.03 167.783L577.338 170.276L573.678 161.172L611.641 208.444H563.484Z"
          fill="#969FA2"
        />
      </g>
      {/*Map marker*/}
      <path
        className="map-marker"
        d="M568.489 227.188C584.297 227.188 597.112 239.465 597.112 254.609C597.112 269.754 578.328 309.454 568.489 309.454C558.65 309.453 539.867 269.754 539.867 254.609C539.867 239.465 552.682 227.188 568.489 227.188ZM568.491 243.283C561.575 243.283 555.969 248.888 555.969 255.802C555.969 262.716 561.575 268.321 568.491 268.321C575.407 268.321 581.014 262.716 581.014 255.802C581.013 248.888 575.407 243.283 568.491 243.283Z"
        fill="#4084E9"
      />
      {/*Tree top left*/}
      <g className="tree-top-left">
        <rect
          x="425.426"
          y="269.611"
          width="4.60744"
          height="46.0656"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M426.004 227C428.956 227 439.14 252.473 439.14 252.473L432.748 249.49L443.282 285.039L436.889 282.16L443.282 307.496L428.979 298.271L408.727 307.496L418.171 279.314L408.727 285.039L419.537 251.793L413.309 252.473C413.309 252.473 423.053 227 426.004 227Z"
          fill="#2A6A81"
        />
      </g>
      {/*Tree bottom left*/}
      <g className="tree-bottom-left">
        <rect
          x="567.453"
          y="632.781"
          width="4.5531"
          height="45.5223"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M571.438 581C572.287 581 575.707 594.201 575.707 594.201L573.407 593.548L580.829 617.188L574.426 611.996L588.512 642.338L582.194 639.493L588.512 664.53L571.438 658.108L551 671.325L561.063 639.493L554.364 642.338L567.17 615.091L562.047 617.188L569.349 592.256L567.17 594.201C567.17 594.201 570.59 581 571.438 581Z"
          fill="#2A6A81"
        />
      </g>
      {/*Tree top left*/}
      <g className="tree-top-left">
        <rect
          x="601.441"
          y="522.846"
          width="3.98397"
          height="39.8321"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M601.94 486C604.492 486 613.298 508.026 613.298 508.026L607.771 505.447L616.88 536.186L611.351 533.696L616.88 555.604L604.512 547.627L587 555.604L595.166 531.235L587 536.186L596.347 507.438L590.962 508.026C590.962 508.026 599.388 486 601.94 486Z"
          fill="#2A6A81"
        />
      </g>
      {/*Tree bottom left*/}
      <g className="tree-bottom-left">
        <rect
          x="439.426"
          y="535.611"
          width="4.60744"
          height="46.0656"
          fill="#63460B"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M440.004 493C442.956 493 453.14 518.473 453.14 518.473L446.748 515.49L457.282 551.039L450.889 548.16L457.282 573.496L442.979 564.271L422.727 573.496L432.171 545.314L422.727 551.039L433.537 517.793L427.309 518.473C427.309 518.473 437.053 493 440.004 493Z"
          fill="#2A6A81"
        />
      </g>
      {/*Lake*/}
      <g className="lake">
        <rect
          width="101.369"
          height="46.1295"
          rx="23.0648"
          transform="matrix(1 0 0 -1 421 430.098)"
          fill="#CBDADD"
        />
        <rect
          width="42.6733"
          height="45.1921"
          rx="21.3367"
          transform="matrix(1 0 0 -1 430.539 401.191)"
          fill="#CBDADD"
        />
        <rect
          width="16.8685"
          height="2.78964"
          rx="1.39482"
          transform="matrix(1 0 0 -1 442.285 376.086)"
          fill="white"
          fillOpacity="0.22"
        />
        <rect
          width="34.5403"
          height="2.78964"
          rx="1.39482"
          transform="matrix(1 0 0 -1 468.812 411.234)"
          fill="white"
          fillOpacity="0.22"
        />
      </g>
    </MobileStyledSvg>
  );
};
