const app = require("./app");
//import app from "./app.js";
//const cors  = require("cors");

const port = process.env.PORT || 3000;
//const port = 3001;
//app(use(cors))
app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`);
});
