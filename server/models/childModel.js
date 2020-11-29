import mongoose from 'mongoose'
// Tutorial: https://www.udemy.com/course/mern-ecommerce/learn/lecture/22484862#overview

const childSchema = mongoose.Schema(
  {
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    recentDeposits: [
      {
        action: { type: String, required: true },
        date: { type: Date, required: true, default: Date.now },
      },
    ],
    recentWithdrawals: [
      {
        action: { type: String, required: true },
        date: { type: Date, required: true, default: Date.now },
      },
    ],
    secret: {
      type: String,
      required: false,
    },
    avatar: {
      type: String,
      required: false,
    },
    funds: [
      {
        name: { type: String, required: true },
        balance: { type: Number, required: true, default: 0 },
        percentage: { type: Number, required: true, default: 0 },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Child = mongoose.model('Child', childSchema)

export default Child
