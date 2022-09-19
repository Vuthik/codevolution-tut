import React, { Component } from 'react';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Vuthik',
    };
    console.log('LifecycleA constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('LifecycleA componentDidMount');
  }
  render() {
    console.log('LifecycleA render');
    return (
      <div>
        <div>Lifecycle A</div>
      </div>
    );
  }
}

export default LifeCycleA;
