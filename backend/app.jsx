const express = require('express');
const app = express();
app.use("/", (req, res, next) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(4000, () => {
  console.log(`Connected to localhost Port ${4000}`);
});



