const Router = require("express");
const UserController = require("../controllets/user-controller");
const registerValidation = require("../validation");
const handleValidationErrors = require("../helpers/handleValidationErrors");
const checkAuth = require("../middleware/checkAuth");

const authRouter = new Router();

authRouter.post(
    "/registration",
    registerValidation,
    handleValidationErrors,
    UserController.registration
);
authRouter.post(
    "/login",
    handleValidationErrors,
    UserController.login
);
authRouter.get(
    "/check",
    checkAuth,
    UserController.auth
);

module.exports = authRouter;