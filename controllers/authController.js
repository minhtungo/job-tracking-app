import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import BadRequestError from './../errors/bad-request.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }

  const isEmailExisted = await User.findOne({ email });

  if (isEmailExisted) {
    throw new BadRequestError('Email already exists');
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      name: user.name,
      location: user.location,
    },
    token,
    location: user.location,
  });
};
export const login = async (req, res) => {
  res.send('login user');
};
export const updateUser = async (req, res) => {
  res.send('updateUser');
};
