import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/userModel.js'
import Child from '../models/childModel.js'
import users from './users.js'
import children from './children.js'
import connectDB from '../config/db.js'

dotenv.config()
connectDB()

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf())
  date.setDate(date.getDate() + days)
  return date
}

const importData = async () => {
  try {
    await User.deleteMany()
    await Child.deleteMany()

    const createdUsers = await User.insertMany(users)
    const firstUser = createdUsers[0]._id
    const secondUser = createdUsers[1]._id

    let i = 0
    children.forEach((element) => {
      i++
      if (i < 4) {
        element.parent = firstUser
      } else {
        element.parent = secondUser
      }
    })
    await Child.insertMany(children)

    console.log('Data imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany()

    console.log('Data destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
