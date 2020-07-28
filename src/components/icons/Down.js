import * as React from "react";

function SvgDown(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="down_svg__feather down_svg__feather-chevron-down"
      {...props}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default SvgDown;
