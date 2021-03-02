import * as React from "react";

function SvgNoIcon(props: ISvgIcons) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      {...props}
    />
  );
}

export default SvgNoIcon;
