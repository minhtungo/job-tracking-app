import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    mgs: 'Something went wrong, try again later',
  };
  err.status(defaultError.statusCode).json({ msg: err });
};

export default errorHandlerMiddleware;
