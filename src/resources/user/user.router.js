import { Router } from 'express'
import controllers from './user.controller'

const router = Router()

router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)

export default router
