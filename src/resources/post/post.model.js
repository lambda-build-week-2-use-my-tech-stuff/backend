import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    postTitle: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: { type: String },
    price: {
      type: String
    },
    postImage: {},
    description: { type: String },
    category: { type: String },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user'
    }
  },
  { timestamps: true }
)

postSchema.index({ postTitle: 1, state: 1 }, { unique: false })

export const Post = mongoose.model('post', postSchema)
