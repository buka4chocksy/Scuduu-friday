import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function Google() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="75"
      fill="none"
      viewBox="0 0 76 75">
      <Path
        fill="#EA4335"
        d="M24.503 32.844a14.744 14.744 0 0114.03-10.117c3.52 0 6.704 1.25 9.204 3.296l7.275-7.273c-4.434-3.865-10.115-6.25-16.48-6.25a24.933 24.933 0 00-22.416 13.854l8.387 6.49z"></Path>
      <Path
        fill="#34A853"
        d="M46.949 50.027c-2.27 1.465-5.154 2.246-8.417 2.246a14.744 14.744 0 01-14.006-10.048l-8.417 6.39A24.927 24.927 0 0038.532 62.5c6.11 0 11.948-2.173 16.321-6.25l-7.902-6.223h-.002z"></Path>
      <Path
        fill="#4A90E2"
        d="M54.853 56.25c4.573-4.267 7.542-10.617 7.542-18.75 0-1.48-.227-3.069-.567-4.546H38.533v9.66H51.94c-.66 3.249-2.438 5.763-4.99 7.413l7.902 6.223z"></Path>
      <Path
        fill="#FBBC05"
        d="M24.526 42.225a14.83 14.83 0 01-.766-4.725c0-1.63.26-3.194.743-4.656l-8.387-6.49A24.862 24.862 0 0013.533 37.5c0 4 .927 7.77 2.577 11.115l8.416-6.39z"></Path>
      <Circle
        cx="37.964"
        cy="37.5"
        r="36.5"
        stroke="#EEE"
        strokeWidth="2">
        </Circle>
    </Svg>
  );
}

export default Google;