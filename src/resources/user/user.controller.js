import { User } from './user.model'
import { crudControllers } from '../../utils/crud'

// export const me = async (req, res) => {
//   const user = await User.findById(req.params.id)
//     .lean()
//     .exec()

//   res.status(200).json({ data: user })
// }

// export const updateMe = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true
//     })
//       .lean()
//       .exec()

//     res.status(200).json({ data: user })
//   } catch (e) {
//     console.error(e)
//     res.status(400).end()
//   }
// }
export default crudControllers(User)
