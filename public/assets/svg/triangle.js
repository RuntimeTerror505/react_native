import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
function TriangleSvg(props) {
  return (
    <Svg
      width={30}
      height={29}
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.064 27.234h23.912L2.064 4.32v22.915z"
        fill="#3BB3BD"
        stroke="#000"
        strokeWidth={2.98891}
      />
    </Svg>
  );
}

export default TriangleSvg;
