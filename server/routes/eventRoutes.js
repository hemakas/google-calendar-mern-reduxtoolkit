import express from 'express'
import { getAllEvents, createEvent } from '../controllers/eventController'

const router = express.Router()

// fetch all events
router.get('/', getAllEvents)

// sign up
router.post('/create', createEvent)

export default router
