import { Router } from 'express'
import { NumsController, PicsController } from '../controllers'

const allNumsRouter: Router = Router()

allNumsRouter.get('/nums', NumsController.getNums)
allNumsRouter.get('/pics', PicsController.getPics)
export { allNumsRouter }
