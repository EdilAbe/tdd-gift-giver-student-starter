const express = require("express");
const app = express();
//app.use(() => console.log("new request"));
const morgan = require("morgan");
const router = require("./routes/gift-exchange");
const { NotFoundError } = require("./utils/errors");
//const cors = require("cors");

// app.get('/',(req,res)=>{ //request is object created by express based o incoming http request
//     res.send(" some response") //response is a object made by express
// })
app.use(morgan("tiny"));
app.use(express.json());
//app(use(cors));

app.use("/gift-exchange", router);

//app.listen(3000, () => console.log("Listening on port 3000"));

app.get("/", (req, res) => {
  res.status(200).send({ ping: "pong" });
});

app.use(async (req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;
  //const error = { status, message };
  return res.status(status).json({
    error: { message, status },
  });
  //return res.status(status).send(error);
});
module.exports = app;
