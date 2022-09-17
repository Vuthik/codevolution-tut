import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  handleClick = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };
  render() {
    //best method: Short circuit operator
    //works by not reading the right hand side if left hand side is false
    return (
      <div>
        {this.state.isLoggedIn && <div>Welcome Vuthik</div>}
        {!this.state.isLoggedIn && <div>Welcome Guest</div>}
        <button onClick={this.handleClick}>Swap</button>
      </div>
    );

    //3rd Approach: Conditional ternirary operator approach
    // return(
    // this.state.isLoggedIn ? <div>Welcome Vuthik</div>  :
    // <div>Welcome Guest</div>
    // );
    //2nd better approach: Element Variables
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Vuthik</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>{message}</div>
    //     <button onClick={this.handleClick}>Swap</button>
    //   </div>
    // );
    //1st bad approach: If else
    //if else statement can't be put inside Jsx
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vuthik</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}

export default UserGreeting;
