import React, { Component } from 'react';
//function components
//convention is to use arrow function
//can have props parameterrs
//can have internal private state variables
class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>
          Welcome {this.props.name} a.k.a {this.props.heroName}
        </h1>
      </div>
    );
  }
}

export default ClassComponent;
