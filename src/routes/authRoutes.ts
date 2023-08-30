import express from 'express';
import { registerWithEmail, loginWithEmail, googleRegister } from '../controllers/auth';

const router = express.Router();

router.post('/register/email', registerWithEmail);
router.post('/login/email', loginWithEmail);
router.post('/register/google', googleRegister);


export default router;