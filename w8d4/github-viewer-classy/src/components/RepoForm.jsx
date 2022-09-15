import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);
    this.initialValues = {
      owner: "",
      repo: "",
    };
    this.state = this.initialValues;

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState(this.initialValues);
  };

  render() {
    return (
      <section>
        <h2>Enter repo and owner</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="owner"
            value={this.state.owner}
            onChange={this.handleChange}
            placeholder="Enter owner"
          />
          <input
            type="text"
            name="repo"
            value={this.state.repo}
            onChange={this.handleChange}
            placeholder="Enter repo"
          />
          <button>Fetch commits</button>
        </form>
      </section>
    );
  }
}
