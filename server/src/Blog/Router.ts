import express from 'express';
import {
  submitBlog, getBlogCount, getBlog,
  getBlogDetail, filterBlog, getUserBlog,
  changeBlogStatus, updateBlog, deleteBlog
} from './Views';

const BlogRouter = express.Router();

BlogRouter.post('/submitblog', submitBlog);
BlogRouter.get('/blogcount', getBlogCount);
BlogRouter.get('/:skip', getBlog);
BlogRouter.get('/detail/:id', getBlogDetail);
BlogRouter.get('/filter/:status', filterBlog);
BlogRouter.get('/user/:author', getUserBlog);
BlogRouter.post('/blogstatus/:id/:status', changeBlogStatus);
BlogRouter.post('/update/:id', changeBlogStatus);
BlogRouter.post('/blogstatus/:id', changeBlogStatus);

export default BlogRouter;
