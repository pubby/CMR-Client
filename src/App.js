import React from 'react';

class Data {
  constructor() {
    this.fields = {};
    this.errors = {};
  }

  validate() {

  }


}

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
                <Ste 
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

function Validity({validity}) {
  let text = '';
  let style = {};

  switch(validity) {
  case 'valid':    text = '✓'; style = { color: 'green' }; break;
  case 'notvalid': text = '✗'; style = { color: 'red' };   break;
  case 'thinking': text = '…'; style = { color: 'black' }; break;
  }

  return (<span className='step-valid-status' style={style}>{text}</span>);
}

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      validity: 'empty', // One of: { 'empty', 'notvalid', 'valid', 'thinking' }
    };
  };
  
  render() {
    return (
      <div className='step' id={stepIDName(this.props.stepNumber)}>
        <h3 className='step-header'>
            { this.props.header }
            <Validity validity={this.state.validity} />
        </h3> 

        <p className='step-text-simple'>{ this.props.simpleText }</p> 

        { this.renderFields() }

        <button 
          className={`hover step-expand-button ${ this.state.expanded ? 'minus' : 'plus' }`}
          onClick={() => { this.setState({ expanded: !this.state.expanded }); }}
          titleNameInput={`Click to see ${ this.state.expanded ? 'less' : 'more' } information about "${ this.props.navName }".`}>
            {`${ this.state.expanded ? 'Less' : 'More' } Information`}
        </button>
        <p className={`step-text-complex ${ expandedClass(this.state.expanded) }`}>{ this.props.complexText }</p> 
      </div>
    );
  }
}

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  modified() {
    this.
  }

  handleChange() {
      const name = event.target.name;
      const value = event.target.value;

      const updatedControls = {
        ...this.state.formControls
      };
      const updatedFormElement = {
        ...updatedControls[name]
      };
      updatedFormElement.value = value;
      updatedFormElement.touched = true;
      updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

      updatedControls[name] = updatedFormElement;

      let formIsValid = true;
      for (let inputIdentifier in updatedControls) {
        formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
      }

      this.setState({
        formControls: updatedControls,
        formIsValid: formIsValid
      });
  }

  return (
    <input type="text" onChange={this.handleChange} />
  );
}

class PersonalInfo extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  modified() {
    if(this.modifiedTimer)
      clearTimeout(this.modificationTimer);
    this.modificationTimer = setTimeout(() => { }, 750);
  }

  update() {
    this.props.

    this.props.changedValidity();
  }

  firstNameChange(event) { this.setState({firstName: event.target.value}, modified.bind(this)); }
  lastNameChange(event)  { this.setState({lastName: event.target.value}, modified.bind(this)); }

  render() {
    return (
      <input type="text" value={this.state.firstName} onChange={this.firstNameChange} />
      <input type="text" value={this.state.lastName} onChange={this.lastName} />
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
