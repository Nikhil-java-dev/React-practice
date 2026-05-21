import { Component } from "react";

export default class LifeCycleInCBC extends Component {
  constructor() {
    super();
    console.log("I am Constructor");
    this.state = { count: 0 };
  }

  increment = () => this.setState({ count: this.state.count + 1 });

  componentDidMount() {
    console.log("I am ComponentDidMount");
    this.intervalId = setInterval(() => {
      console.log("API CALLED");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  componentWillUnmount() {
    console.log("Component I Going To Unmount");
    clearInterval(this.intervalId);
  }

  render() {
    console.log("I am Render");
    return (
      <div>
        <h1>Count is {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
