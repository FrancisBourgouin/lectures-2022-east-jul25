export default function Result(props) {
  return (
    <footer>
      {props.result === "tie" && <h2>YOU CAN TRY AGAIN!</h2>}
      {props.result === "player" && <h2>Woohoo ! MAN OVER MACHINE</h2>}
      {props.result === "computer" && <h2>Skynet has won.</h2>}
      {!props.result && <h2>Waiting for your choice !</h2>}
    </footer>
  );
}
