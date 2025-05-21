import { type Handler } from 'express';
import { Pics } from '../db/models';


export const getPics: Handler = async (req: any, res: any, next) => {
  try {
    const picRes = await Pics.findAll();
    res.status(200).send(picRes);
  } catch (error) {
    next(error)
  }
}
