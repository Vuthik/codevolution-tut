// rce snippet to create class component
import React, { Component } from 'react';

class EventBind extends Component {
  // rconst snippet to create constructor
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };
    /* 3rd Approach: binding event handler in constructor rather than in render method */
    //because the binding happens once in the constructor, this has better performance than the last 2 approaches
    // this.clickHandler = this.clickHandler.bind(this);
  }
  // 1st,2nd,3rd approach
  //   clickHandler() {
  //     this.setState({
  //       message: 'GoodBye',
  //     });
  //     console.log(this);
  //   }
  /* 4th Approach: use arrow function as a class property */
  clickHandler = () => {
    this.setState({
      message: 'Goodbye',
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 4th Approach: use arrow function as a class property */}
        <button onClick={this.clickHandler}>Click</button>
        {/* 3rd Approach: binding event handler in constructor rather than in render method */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* 2nd Approach: using arrow functions in render*/}
        {/* Also has performance implications in certain scenarios */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* 1st Approach: binding will cause the render method to rerun so it is quite costly for big apps */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
      </div>
    );
  }
}

export default EventBind;
