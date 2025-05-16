const { Router } = require("express");
const { getAllUsers, getUserById, Signup, Login, updateUser, deleteUser } = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/all",getAllUsers);
userRouter.get("/:id",getUserById);

userRouter.post("/signup",Signup);
userRouter.post("/login",Login);

userRouter.patch("/update/:id",updateUser);

userRouter.delete("/delete/:id",deleteUser);

module.exports = userRouter;