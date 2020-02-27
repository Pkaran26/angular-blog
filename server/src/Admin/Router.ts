import express from 'express';
import { doLogin, getDashboardCount, getUsers, getUsersCount, manageUser } from './Views';

const AdminRouter = express.Router();

AdminRouter.post('/login', doLogin);
AdminRouter.get('/dashboard', getDashboardCount);
AdminRouter.get('/users', getUsers);
AdminRouter.get('/userscount', getUsersCount);
AdminRouter.post('/manageuser', manageUser);

export default AdminRouter;
