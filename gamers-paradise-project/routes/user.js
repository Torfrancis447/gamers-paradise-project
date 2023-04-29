import express from 'express'
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router()

//all routes start with /users
router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router