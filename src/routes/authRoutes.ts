import express from 'express';
import { localRegister, googleRegister } from '../controllers/auth';

const router = express.Router();

router.post('/register/local', localRegister);
router.post('/register/google', googleRegister);


export default router;