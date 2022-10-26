import { Router } from 'express';
import authRouter from './auth-routes';
import parkRouter from './park-routes';
import userRouter from './user-routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/park', parkRouter);

export default router;
