import express from 'express'
import { signUp, signIn, getAllUsers } from '../controllers/userController'

const router = express.Router()

// fetch all users
router.get('/', getAllUsers)

// sign up
router.post('/signup', signUp)

// sign in
router.post('/signin', signIn)

export default router
