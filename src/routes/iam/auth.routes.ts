import express from "express";
import {
    currentUserController,
    tokenController,
    registerController,
    signOutController, passwordResetController
} from "../../controllers/iam/auth.controller";
import {tokenValidator, registerValidator, resetPasswordValidator} from "../../validators/iam/auth.validators";
import {validateRequest} from "../../middlewares/validate-request";

const router = express.Router();

// parent -> /iam/auth

router.post('/register', registerValidator, validateRequest, registerController);
router.post('/token', tokenValidator, validateRequest, tokenController);
router.post('/reset-password', resetPasswordValidator, validateRequest, passwordResetController);
router.get('/currentUser', currentUserController);
router.post('/logout', signOutController);

export const AuthRouter = router;
