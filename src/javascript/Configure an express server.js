/* 
Your Task

Inside the solution function you have to require express and start a server.

The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment configuration).

process.env = {
  PORT: 3000,
  HOST: '0.0.0.0',
};
*/

const solution = () => {
  const express = require("express");
  const app = express();
  const port = process.env.PORT;
  const host = process.env.HOST;
  const callback = (req, res) =>
    console.log(`server is running on ${host}:${port}`);
  app.listen(port, host, callback);
};
