export const PostIt3 = ({
  width,
  height,
  color,
}: {
  width: string;
  height: string;
  color: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 274 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1136_19441)">
        <path d="M24 43H248L251 204L197 228.5L20 246L24 43Z" fill="#D9D9D9" />
      </g>
      <path
        d="M20 246V15H251V204C251 204 202.5 246 92 246L20 246Z"
        fill={color}
      />
      <rect
        x="20"
        y="15"
        width="231"
        height="28"
        fill="black"
        fillOpacity="0.01"
      />
      <path
        d="M225 181C225 181 199.5 246 92 246C203 246 251 204 251 204V202.5C251 202.5 249 213.5 225 181Z"
        fill="black"
        fillOpacity="0.18"
      />
      <defs>
        <filter
          id="filter0_d_1136_19441"
          x="10"
          y="41"
          width="251"
          height="223"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1136_19441"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1136_19441"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
