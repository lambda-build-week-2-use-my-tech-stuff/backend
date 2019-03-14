import { Router } from 'express'
import { me, updateMe } from './user.controller'
import { User } from './user.model'

const router = Router()

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const docs = await User.findById(req.params.id)
        .lean()
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      console.error(e)
      res.status(400).end()
    }
  })

  .put(updateMe)

export default router
