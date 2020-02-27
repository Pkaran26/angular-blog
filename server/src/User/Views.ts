import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import Connection from '../Utils/Connection';
import { JSONResponse, DBError, QueryError } from "../Utils/Responses";

export const doLogin = async (req: Request, res: Response)=>{
  const { email, password } = req.body;
  const connection = await Connection();
  if(connection){
    connection.collection('user').findOne({ email: email, password: password }, (err: any, user: any)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        if(user && user.is_active){
          res.json(JSONResponse(true, user));
        }else{
          res.json(JSONResponse(false, { error: 'invalid details' }));
        }
      }
    })
  }else{
    res.json(DBError())
  }
}

export const doSignup = async (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    connection.collection('user').insertOne(req.body, (err: any, user: any)=>{
    if(err){
      res.json(QueryError(err))
    }else{
      res.json(JSONResponse(true, { message: 'Success' }));
    }
  })
  }else{
    res.json(DBError())
  }
}

export const getDashboardCount = async (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    const pending = await connection.collection('blog').aggregate([
      { $match: { _id: id, status: 'pending' } },
      { $count: "_id" }
    ]).toArray();
    const published = await connection.collection('blog').aggregate([
      { $match: { _id: id, status: 'published'  } },
      { $count: "_id" }
    ]).toArray();
    if(pending, && published){
      res.json(JSONResponse(true, { pending, published }));
    }else{
      res.json(JSONResponse(false, { error: 'error' }));
    }
  }else{
    res.json(DBError())
  }
}
