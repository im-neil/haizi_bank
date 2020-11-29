import express from 'express'
import asyncHandler from 'express-async-handler'
import Child from '../models/childModel.js'

const router = express.Router()

// @desc    Fetch all children
// @route   GET /api/child
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const children = await Child.find({})

    res.json(children)
  })
)

// @desc    Fetch single child
// @route   GET /api/child/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const child = await Child.findById(req.params.id)

    if (child) {
      res.json(child)
    } else {
      res.status(404)
      throw new Error('Child not found')
    }
  })
)

export default router
