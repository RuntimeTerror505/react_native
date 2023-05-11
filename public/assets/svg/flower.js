import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function FlowerSvg(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.875.604V.346c6.666 0 12.07 5.404 12.07 12.07C6.363 12.416 1.012 7.151.875.604z"
        fill="#7815CD"
      />
      <Path
        d="M1.132 21.268H.875c0-6.667 5.404-12.071 12.07-12.071 0 6.582-5.265 11.933-11.813 12.07z"
        fill="#7815CD"
      />
      <Path
        d="M21.797 21.01v.258c-6.667 0-12.07-5.405-12.07-12.071 6.581 0 11.933 5.265 12.07 11.813z"
        fill="#7815CD"
      />
      <Path
        d="M21.539.346h.258c0 6.666-5.404 12.07-12.07 12.07 0-6.581 5.265-11.933 11.812-12.07z"
        fill="#7815CD"
      />
    </Svg>
  );
}

export default FlowerSvg;
