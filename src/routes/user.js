const { Router } = require("express");
const userController = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", userController.createUserGet);
userRouter.post("/sign-up",userController.createUserPost)
userRouter.put("/edituser/:id",userController.updateUserPost)
userRouter.delete("/deleteuser/:id",userController.deleteUserPost)
module.exports = userRouter; 
