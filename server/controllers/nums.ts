import { type Handler } from 'express';
import { Nums } from './../db/models';


export const getNums: Handler = async (req: any, res: any, next) => {
  try {
    const numRes = await Nums.findAll();
    res.status(200).send(numRes);
  } catch (error) {
    next(error)
  }
}
