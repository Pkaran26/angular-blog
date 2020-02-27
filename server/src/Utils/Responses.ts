export const JSONResponse = (status: any, data: any)=>{
  return {
    status,
    data
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
