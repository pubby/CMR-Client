import React from 'react';
import { evenOddClass, stepIDName } from '../../css.js'

export default function NavBar(props) {
  function doScroll() {
    document.getElementById(stepIDName(props.stepNumber)).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
  }

  return (
    <li 
      className="hover"
      onClick={doScroll}
    >
      {props.navName}
    </li>
  );
}
