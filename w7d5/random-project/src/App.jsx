import "./App.css";
import useWow from "./useWow";

function App() {
  const { sayWow } = useWow();
  return (
    <div className="App">
      <img onClick={sayWow} src="/owen.png" alt="" />
    </div>
  );
}

export default App;
