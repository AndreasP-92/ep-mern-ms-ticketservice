import { Router } from 'express'

const router = Router()

router.get('/ms/ticket', (req, res) => {
    res.send("Welcome to the Ticket Service API")
})


export default router


