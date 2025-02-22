const { Router } = require("express");
const profileController = require("../controllers/profileController");

const profileRouter = Router();

profileRouter.post("/:id", profileController.createProfile);

module.exports = profileRouter