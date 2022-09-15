import { Component } from "react";
import "./App.css";
import CommitList from "./components/CommitList";
import Header from "./components/Header";
import RepoForm from "./components/RepoForm";
import Spy from "./components/Spy";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      commits: null,
      spyFound: false,
    };
  }

  findSpy = () => {
    this.setState({ ...this.state, spyFound: true });
  };

  fetchCommits = (owner, repo) => {
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({ ...this.state, commits: data });
      });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.findSpy}>Report</button>
        {!this.state.spyFound && <Spy />}
        <Header />
        <main>
          <RepoForm onSubmit={({ owner, repo }) => this.fetchCommits(owner, repo)} />
          <CommitList commits={this.state.commits} />
        </main>
      </div>
    );
  }
}

export default App;
