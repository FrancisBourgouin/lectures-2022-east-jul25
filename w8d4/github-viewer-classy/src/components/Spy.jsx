import { Component } from "react";

export default class Spy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  report = (event) => this.setState({ x: event.clientX, y: event.clientY });

  componentDidMount() {
    document.addEventListener("click", this.report);
  }

  // useEffect(() => {
  //   document.addEventListener("click", this.report);

  //   return () => document.removeEventListener("click", this.report);
  // } )

  componentWillUnmount() {
    document.removeEventListener("click", this.report);
  }

  componentDidUpdate(oldProps, oldState, props) {
    if (oldState.x !== this.state.x || oldState.y !== this.state.y) {
      console.log("report!");
      console.log(this.state.x, this.state.y);
    }
  }

  render() {
    return <h1 style={{ fontSize: "5em" }}>🕵️</h1>;
  }
}
