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
    description: { type: String },
    category: { type: String },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'user',
      required: true
    }
  },
  { timestamps: true }
)

export const Post = mongoose.model('post', postSchema)
