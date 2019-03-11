import { Router } from 'express'
import controllers from './post.controller'

const router = Router()

// /api/post
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)

// /api/post/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
