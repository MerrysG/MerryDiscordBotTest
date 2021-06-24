module.exports = {
    name: 'ping',
    description: 'questo è un comando del cazzo',
    execute(message, args){
        message.channel.send('pong');
    }
}