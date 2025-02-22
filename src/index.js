const express = require("express");
const userRouter = require("./routes/user"); 
const profileRouter =  require("./routes/profile")
const app = express();
const PORT = process.env.PORT || 3000; 
app.use(express.json());
app.use("/users", userRouter);
app.use("/profile",profileRouter)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
