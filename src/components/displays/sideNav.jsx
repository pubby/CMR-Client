import React from 'react';

const NavBar = (props) => {
    function evenOddClass(i) { return i % 2 ? 'odd' : 'even'; };
    function stepIDName(stepNumber) { return `step-${stepNumber}`; };

    function doScroll() {
      document.getElementById(stepIDName(props.stepNumber)).scrollIntoView({
          behavior: 'smooth'
      });
    }
  
    return (
      <li 
        className={`hover ${evenOddClass(props.stepNumber)}`}
        onClick={doScroll}>
          {props.navName}
      </li>
    );
  }

  export default NavBar;