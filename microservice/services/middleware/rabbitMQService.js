import amqplib from "amqplib";
// import ticketRepository from "../../repository/ticketRepository.js";

let channel, connection;

async function connectQueue(){
    try {
        connection = await amqplib.connect("amqp://localhost:5672");
        channel    = await connection.createChannel()

        await channel.assertQueue("ticket-queue")

        channel.consume("ticket-queue", data =>{
            console.log(`${Buffer.from(data.content)}`);

            // ticketRepository.createTicket(JSON.parse(data.content));
            channel.ack(data);
        })
    } catch (error) {
        console.log(error)
    }
}

export default connectQueue