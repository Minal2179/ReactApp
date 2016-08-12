import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class componentName extends Component{
  render(){
    return(
      <div className="container-fluid">
      <nav>
        <IndexLink to="/">Home</IndexLink>
        {"  |  "}
        <Link to="/about">About</Link>
        {"  |  "}
        <Link to="/courses">Courses</Link>
      </nav>
      </div>
    );
  }
}

export default componentName;
