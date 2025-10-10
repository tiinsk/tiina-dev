export const PostIt4 = ({
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
      <g filter="url(#filter0_d_1136_19440)">
        <path d="M24 43H248L251 246H20L24 43Z" fill="#D9D9D9" />
      </g>
      <path d="M20 246V15H251V246H20Z" fill={color} />
      <rect
        x="20"
        y="15"
        width="231"
        height="28"
        fill="black"
        fillOpacity="0.01"
      />
      <defs>
        <filter
          id="filter0_d_1136_19440"
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
            result="effect1_dropShadow_1136_19440"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1136_19440"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
