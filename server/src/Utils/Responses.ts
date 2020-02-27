export const JSONResponse = (status: any, payload: any)=>{
  return {
    status,
    payload
  }
}

export const DBError = ()=>{
  return {
    status: false,
    error: 'database connection error'
  }
}

export const QueryError = (err: any)=>{
  return {
    status: false,
    error: err
  }
}
