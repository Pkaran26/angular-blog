import express from 'express';
import AdminRouter from './Admin/Router';
// import BlogRouter from './Blog/Router';
// import UserRouter from './User/Router';

const app = express();
const port = process.env.PORT || '3000';

app.use('/admin', AdminRouter);
// app.use('/blog', BlogRouter);
// app.use('/user', UserRouter);

app.listen(port, err => {
  if (err) return console.error(err);
  return console.log(`Server is listening on ${port}`);
});
