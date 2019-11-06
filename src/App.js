import React from 'react';

const steps = [
  { 
    header: 'What was the crime?',
    navName: 'Crime Info',
    simpleText: 'Simple explanation.',
    complexText: 'Complex explanation',
    body: 'Body code.'
  },
  { 
    header: 'How long ago was this?',
    navName: 'Crime Date',
    simpleText: 'Simple explanation.',
    complexText: 'Complex explanation',
    body: 'Body code.'
  },
  { 
    header: 'Where in Missouri?',
    navName: 'Crime Location',
    simpleText: 'Simple explanation.',
    complexText: 'Complex explanation',
    body: 'Body code.'
  },
  { 
    header: 'Who are you?',
    navName: 'Personal Info',
    simpleText: 'Simple explanation.',
    complexText: 'Complex explanation',
    body: 'Body code.'
  },
];

function App() {
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
              <NavBarElement 
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

function stepIDName(stepNumber) { return `step-${stepNumber}`; }
function expandedClass(expanded) { return expanded ? 'expanded' : 'collapsed'; }
function evenOddClass(i) { return i % 2 ? 'odd' : 'even'; }

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  };
  
  render() {
    return (
      <div className='step' id={stepIDName(this.props.stepNumber)}>
        <h3 className='step-header'>{ this.props.header }</h3> 
        <p className='step-text-simple'>{ this.props.simpleText }</p> 

        <p>Input fields and stuff would go here.</p>
        <input type="text" /><br />
        <input type="text" /><br />
        <input type="text" /><br />
        <p>More input stuff, etc.</p>

        <button 
          className={`hover step-expand-button ${ this.state.expanded ? 'minus' : 'plus' }`}
          onClick={() => { this.setState({ expanded: !this.state.expanded }); }}
          title={`Click to see ${ this.state.expanded ? 'less' : 'more' } information about "${ this.props.navName }".`}>
            {`${ this.state.expanded ? 'Less' : 'More' } Information`}
        </button>
        <p className={`step-text-complex ${ expandedClass(this.state.expanded) }`}>{ this.props.complexText }</p> 
      </div>
    );
  }
}

function NavBarElement(props) {
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

export default App;
