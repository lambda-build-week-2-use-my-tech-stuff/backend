import { Router } from 'express'
import controllers from './post.controller'
import { Post } from './post.model'

const router = Router()

// /api/post
router
  .route('/')
  .get(async (req, res) => {
    try {
      const docs = await Post.find({})
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  })
  .post(controllers.createOne)

// /api/post/:id
router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const docs = await Post.findById(req.params.id)
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  })
  .put(controllers.updateOne)

  .delete(controllers.removeOne)

export default router
