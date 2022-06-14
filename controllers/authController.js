import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ user });
};
export const login = async (req, res) => {
  res.send('login user');
};
export const updateUser = async (req, res) => {
  res.send('updateUser');
};
