export default function CommitList(props) {
  const { commits } = props;

  if (!Array.isArray(commits)) {
    return (
      <section>
        <h2>No commits or repo selected yet</h2>
      </section>
    );
  }

  const parsedCommits = commits.map((commitObj) => {
    const { message } = commitObj.commit;
    const { name, date } = commitObj.commit.committer;

    return (
      <li key={commitObj.sha}>
        <p>{message}</p>
        <p>By {name}</p>
        <p>On {date}</p>
      </li>
    );
  });
  return (
    <section>
      <h2>List of recent commits</h2>
      <ul>{parsedCommits}</ul>
    </section>
  );
}
