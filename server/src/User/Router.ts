import express from 'express';
import { doLogin, doSignup, getDashboardCount } from './Views';

const UserRouter = express.Router();

UserRouter.post('/login', doLogin);
UserRouter.post('/signup', doSignup);
UserRouter.get('/dashboard', getDashboardCount);

export default UserRouter;
