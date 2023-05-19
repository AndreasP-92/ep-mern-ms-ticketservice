import asd from '../services/middleware/rabbitMQService'

module.exports = function(app){
    app.get("/send-msg")
    app.get("/ms/ticketservice", (req,res)=>{
        res.send("Welcome to Ticket Service")
    })
}


