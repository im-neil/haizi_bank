import express from 'express'
import asyncHandler from 'express-async-handler'
import Child from '../models/childModel.js'

const router = express.Router()

// @desc    Fetch all children of parent
// @route   GET /api/parent/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const children = await Child.find({ parent: req.params.id })

    if (children) {
      res.json(children)
    } else {
      res.status(404)
      throw new Error('No children found')
    }
  })
)

export default router
