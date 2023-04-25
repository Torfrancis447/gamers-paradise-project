import express from 'express'

    const UUID = () => Math.random().toString(36).substring(2, 15)

const router = express.Router()
const users = [
    {
        firstName : "John",
        lastName : "Doe",
        age : 15
    }
]
//all routes start with /users

router.get('/', (req, res) => {
    console.log(users)
    res.send(users);
})

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED')

    //response from data sent
    const user = req.body

    //give user unique id
    const userId = UUID()

    //add user id to user object(the response body)
    const userWithId = {...user, id : userId}

    //set new user to a const and then push
    users.push(userWithId)
    res.send(users)
})

router.get('/:id', (req, res) => {
    const id = req.params
    res.send(id)
})

export default router