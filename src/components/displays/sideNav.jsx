import React from 'react';
import { stepIDName, inView } from '../../css.js'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sectionInView: true };
  }

  render() {
    const doScroll = () => {
      document.getElementById(stepIDName(this.props.stepNumber)).scrollIntoView({
          behavior: 'smooth',
          block: 'center'
      });
    }

    return (
      <li 
        className={`hover ${this.state.sectionInView ? 'navbar-in-view' : 'navbar-not-in-view'}`}
        onClick={doScroll}
      >
        {this.props.navName}
      </li>
    );
  }
    
  componentDidMount() {
    const callback = (entries, observer) => { 
      window.requestIdleCallback(() => {
        this.setState({ sectionInView: entries[entries.length - 1].isIntersecting });
      });
    };

    const options = {
      threshold: 0.2,
    };

    this.observer = new IntersectionObserver(callback, options);
    this.observer.observe(document.getElementById(stepIDName(this.props.stepNumber)));
  }

  componentWillUnmount() {
    this.observer.disconnect();
    this.observer = null;
  }
}


