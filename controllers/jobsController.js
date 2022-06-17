import Job from '../models/Job.js';
import BadRequestError from './../errors/bad-request.js';
import { StatusCodes } from 'http-status-codes';

export const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError('Please provide all fields');
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });

  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

export const updateJob = async (req, res) => {
  res.send('updateJob');
};
export const deleteJob = async (req, res) => {
  res.send('deleteJob');
};
export const showStats = async (req, res) => {
  res.send('showStats');
};
