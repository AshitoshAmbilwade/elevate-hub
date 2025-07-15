const asyncHandler = (execution) => {
  return (req, res, next) => {
    Promise.resolve(execution(req, res, next)).catch(next);
  };
};

export default asyncHandler;
