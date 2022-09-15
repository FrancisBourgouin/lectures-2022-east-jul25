import "./App.css";
import RepoForm from "./components/RepoForm";
import CommitList from "./components/CommitList";
import Header from "./components/Header";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import { useCallback } from "react";
import useCallbackOnMount from "./hooks/useCallbackOnMount";

//  https://api.github.com/repos/OWNER/REPO/commits

function App() {
  const [commits, setCommits] = useState(null);
  const someValue = useRef(0);

  useCallbackOnMount(() => {
    const report = (event) => console.log(event.clientX, event.clientY);
    console.log("wazzaaa.");

    document.addEventListener("click", report);

    return () => document.removeEventListener("click", report);
  });

  useEffect(() => {
    console.log("yo yo yo");
  }, []);

  const updateSomeValue = () => {
    someValue.current = someValue.current + 1;
    console.log(someValue.current);
  };

  const fetchCommits = (owner, repo) => {
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then((res) => res.data)
      .then((data) => {
        setCommits(data);
      });
  };

  return (
    <div className="App">
      <Header />
      {someValue.current}
      <button onClick={updateSomeValue}>Update</button>
      <main>
        <RepoForm onSubmit={({ owner, repo }) => fetchCommits(owner, repo)} />
        <CommitList commits={commits} />
      </main>
    </div>
  );
}

export default App;
