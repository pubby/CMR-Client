import React from 'react';

import Step from './components/displays/step';
import NavBar from './components/displays/sideNav';

const steps = require("./data/config");

const App = () => {
  return (
    <div className='app'>
      <div className='header'>
          <h1>Clear My Missouri Record</h1>
      </div>

      <div className='content'>
        <div className='steps'>
          { steps.map((data, index) => {
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

      <div className='navbar'>
        <ol className='navbar-sticky'>
          { steps.map((data, index) => {
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

      <div className='footer'>
          <h2>A footer will go here!</h2>
      </div>
    </div>
  );
}


export default App;
