const net = require("net");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options = {
  port: 9001,
  host: "localhost",
};

const connection = net.createConnection(options, () => {
  console.log("Succesfully connected");

  connection.setEncoding("utf-8");

  // setInterval(() => {
  //   connection.write("Yo yo yo.");
  // }, 1000);
  rl.on("line", (line) => {
    // console.log(`Received: ${line}`);
    connection.write(line);
  });
});

connection.on("data", (data) => console.log(data));

// Send a custom message

// Send to server with connection.write
// Stdin? Standard Input ?
// Readline
