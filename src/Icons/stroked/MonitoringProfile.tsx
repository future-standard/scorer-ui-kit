import * as React from "react";

function SvgMonitoringProfile(props: ISvgIcons) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
      <g
        stroke={props.color}
        strokeWidth={props.weight}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect={"non-scaling-stroke"}
      >
        <circle cx={17.25} cy={16.5} r={1.5} />
        <path d="M18.524 10.7l.442 1.452c.15.5.664.799 1.174.681l1.472-.341a1.338 1.338 0 011.275 2.218l-1.031 1.111a1 1 0 000 1.362l1.031 1.111a1.339 1.339 0 01-1.275 2.219l-1.472-.342a1 1 0 00-1.174.681l-.442 1.448a1.33 1.33 0 01-2.548 0l-.442-1.453a1 1 0 00-1.174-.681l-1.472.342a1.34 1.34 0 01-1.275-2.219l1.031-1.111a1 1 0 000-1.362l-1.031-1.111a1.34 1.34 0 011.275-2.218l1.472.341a.992.992 0 001.174-.681l.442-1.452a1.33 1.33 0 012.548.005zM8.25 14.25a4.5 4.5 0 114.25-5.978" />
        <path d="M9.75 9.75h-1.5v-1.5" />
        <path d="M7.5 20.25H2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l2.872 2.871c.281.281.44.663.439 1.061V6.75" />
      </g>
    </svg>
  );
}

export default SvgMonitoringProfile;
