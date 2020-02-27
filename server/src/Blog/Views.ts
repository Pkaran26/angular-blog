import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import Connection from '../Utils/Connection';
import { JSONResponse, DBError, QueryError } from "../Utils/Responses";
import moment from 'moment';

export const submitBlog = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    connection.collection('blog').insertOne(req.body, (err, status)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, { messages: 'Success' }));
      }
    })
  }else{
    res.json(DBError())
  }
}

export const getBlogCount = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    connection.collection('blog').aggregate([
      { $count: '_id' }
    ])
    .toArray((err, count)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, count);
      }
    })
  }else{
    res.json(DBError())
  }
}

export const getBlog = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    const { skip } = req.params;
    connection.collection('blog').aggregate([
      { $match: { status: 'published' } },
      { $skip: skip }
    ])
    .toArray((err, blogs)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, blogs);
      }
    })
  }else{
    res.json(DBError())
  }
}

export const getBlogDetail = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    const { id } = req.params;
    connection.collection('blog').find({ _id: id, status: 'published' }, (err, blog)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, blog);
      }
    })
  }else{
    res.json(DBError())
  }
}

export const filterBlog = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    const { status } = req.params;
    connection.collection('blog').find({ status: status }, (err, blog)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, blog);
      }
    })
  }else{
    res.json(DBError())
  }
}

export const getUserBlog = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    const { author } = req.params;
    connection.collection('blog').find({ author: author }, (err, blog)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, blog);
      }
    })
  }else{
    res.json(DBError())
  }
}

export const changeBlogStatus = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    const { id, status } = req.params;
    connection.collection('blog').updateOne({ _id: id }, { status: status, published_At: moment() }, (err, blog)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, blog);
      }
    })
  }else{
    res.json(DBError())
  }
}

export const updateBlog = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    const { id } = req.params;
    connection.collection('blog').updateOne({ _id: id }, { ...req.body }, (err, blog)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, blog);
      }
    })
  }else{
    res.json(DBError())
  }
}

export const deleteBlog = (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    const { id } = req.params;
    connection.collection('blog').remove({ _id: id }, (err, blog)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, blog);
      }
    })
  }else{
    res.json(DBError())
  }
}
