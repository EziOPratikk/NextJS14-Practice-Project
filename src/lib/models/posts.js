import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

postSchema.pre('save', async function (next) {
  const timeStamp = Date.now();
  // If slug is not provided, set it to username
  if (!this.slug && this.username) {
    this.slug = this.username + timeStamp;
  }
  next();
});

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
