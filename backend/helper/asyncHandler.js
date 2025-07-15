 const asyncHandler =(execution)=>{
    execution(res,req, next).catch(next)
}

export default asyncHandler;