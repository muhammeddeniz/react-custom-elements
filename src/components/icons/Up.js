import * as React from "react";

function SvgUp(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="up_svg__feather up_svg__feather-chevron-up"
      {...props}
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  );
}

export default SvgUp;
