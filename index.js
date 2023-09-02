require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 5001;
app.listen(PORT, function () {
  console.log(`App Run on  ${PORT}`);
});
