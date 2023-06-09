import amqplib from "amqplib";
// import ticketRepository from "../../repository/ticketRepository.js";

let channel, connection;

async function connectQueue(){
    try {
        console.log(process.env.ENVIRONMENT)
        connection = process.env.ENVIRONMENT == 'prod'? await amqplib.connect(`amqp://${process.env.RABBITMQ_IP}:5672`) : await amqplib.connect("amqp://localhost:5672");

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