import React from 'react';

import Step from './components/displays/step';
import NavBar from './components/displays/sideNav';
import Hidden from '@material-ui/core/Hidden';

const Steps = require("./data/config");

export default function App() {
  return (
    <div className='app'>
      <div className='header'>
          <h1>Clear My Missouri Record</h1>
      </div>

      <div className='content'>
        <div className='steps'>
          { Steps.steps.map((data, index) => {
            return (
              <Step 
                key={ index.toString() } 
                stepNumber={ index+1 } 
                { ...data } 
              />
            );
          }) }
        </div>
      </div>
      <Hidden smDown>
        <div className='navbar'>
          <ol className='navbar-sticky'>
            { Steps.steps.map((data, index) => {
              return (
                <NavBar 
                  key={ index.toString() } 
                  stepNumber={ index+1 } 
                  { ...data } 
                />
              );
            }) }
          </ol>
        </div>
      </Hidden>

      <div className='footer'>
          <div className='footer-content'>footer placeholder</div>
      </div>
    </div>
  );
}
