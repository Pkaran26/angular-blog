import { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import Connection from '../Utils/Connection';
import { JSONResponse, DBError, QueryError } from "../Utils/Responses";

// export const doLogin = async (req: Request, res: Response)=>{
//   const { email, password } = req.body;
//   const connection = await Connection();
//   if(connection){
//     connection.collection('user').findOne({ email: email, password: password }, (err: any, user: any)=>{
//       if(err){
//         res.json(QueryError(err))
//       }else{
//         if(user && user.is_active){
//           res.json(JSONResponse(true, user));
//         }else{
//           res.json(JSONResponse(false, { error: 'invalid details' }));
//         }
//       }
//     })
//   }else{
//     res.json(DBError())
//   }
// }
//
// export const getDashboardCount = async (req: Request, res: Response)=>{
//   const connection = await Connection();
//   if(connection){
//     const users = await connection.collection('user').aggregate([ { $count: "_id" } ]).toArray();
//     const blogs = await connection.collection('blog').aggregate([ { $count: "_id" } ]).toArray();
//     if(users && blogs){
//       res.json(JSONResponse(true, { users, blogs }));
//     }else{
//       res.json(JSONResponse(false, { error: 'error' }));
//     }
//   }else{
//     res.json(DBError())
//   }
// }

export const getUsers = async (req: Request, res: Response)=>{
  const connection = await Connection();
  if(connection){
    connection.collection('user').find({}, (err: any, users: any)=>{
      if(err){
        res.json(QueryError(err))
      }else{
        res.json(JSONResponse(true, users));
      }
    })
  }else{
    res.json(DBError())
  }
}
//
// export const getUsersCount = async (req: Request, res: Response)=>{
//   const connection = await Connection();
//   if(connection){
//     connection.collection('user').aggregate([
//       { $count: '_id' }
//     ])
//     .toArray((err: any, count: any)=>{
//       if(err){
//         res.json(QueryError(err))
//       }else{
//         res.json(JSONResponse(true, count));
//       }
//     })
//   }else{
//     res.json(DBError())
//   }
// }
//
// export const manageUser = async (req: Request, res: Response)=>{
//   const connection = await Connection();
//   if(connection){
//     const { id, block } = req.params;
//     connection.collection('user').updateOne({ _id: id },
//       { is_active: block, is_blocked: block },
//       (err: any, messages: any)=>{
//       if(err){
//         res.json(QueryError(err))
//       }else{
//         res.json(JSONResponse(true, messages));
//       }
//     })
//   }else{
//     res.json(DBError())
//   }
// }
