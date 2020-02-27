import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import Connection from './Utils/Connection';
import { JSONResponse, DBError, QueryError } from "./Utils/Responses";

export const doLogin = async (req: Request, res: Response)=>{
  const { email, password } = req.body;
  const connection = await Connection;
  if(connection){
    connection.collection('user').findOne({ email: email, password: password }, (err, user)=>{
      if(err){
        res.json(QueryError)
      }else{
        if(user && user.is_active){
          res.json(JSONResponse(true, user);
        }else{
          res.json(JSONResponse(false, { error: 'invalid details' });
        }
      }
    })
  }else{
    res.json(DBError)
  }
}

export const getDashboardCount = async (req: Request, res: Response)=>{

}

export const getUsers = async (req: Request, res: Response)=>{
  const connection = await Connection;
  if(connection){
    connection.collection('user').find({}, (err, users)=>{
      if(err){
        res.json(QueryError)
      }else{
        res.json(JSONResponse(true, users);
      }
    })
  }else{
    res.json(DBError)
  }
}

export const getUsersCount = async (req: Request, res: Response)=>{
  const connection = await Connection;
  if(connection){
    connection.collection('user').aggregate([
      { $count: '_id' }
    ])
    .toArray((err, count)=>{
      if(err){
        res.json(QueryError)
      }else{
        res.json(JSONResponse(true, count);
      }
    })
  }else{
    res.json(DBError)
  }
}

export const blockUser = async (req: Request, res: Response)=>{
  const connection = await Connection;
  if(connection){
    const { id } = req.params;
    connection.collection('user').updateOne({ _id: id }, { is_active: false, is_blocked: true }, (err, messages)=>{
      if(err){
        res.json(QueryError)
      }else{
        res.json(JSONResponse(true, messages);
      }
    })
  }else{
    res.json(DBError)
  }
}
