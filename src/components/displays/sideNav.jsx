import React from 'react';
import { evenOddClass, stepIDName } from '../../css.js'

export default function NavBar(props) {
  function doScroll() {
    document.getElementById(stepIDName(props.stepNumber)).scrollIntoView({
        behavior: 'smooth'
    });
  }

  return (
    <li 
      className={`hover ${evenOddClass(props.stepNumber)}`}
      onClick={doScroll}
    >
      {props.navName}
    </li>
  );
}
