const amqp = require("amqplib")

let channel, connection;

async function connectQueue(){
    try {
        connection = await amqp.connect("amqp://localhost:5672");
        channel    = await connection.createChannel()

        await channel.assertQueue("test-queue")
    } catch (error) {
        console.log(error)
    }
}

connectQueue()

async function sendData (data) {
    await channel.sendToQueue("test-queue", Buffer.from(JSON.stringify(data)));

    await channel.close();
    await connection.close();
}

module.exports = {
    sendData
}