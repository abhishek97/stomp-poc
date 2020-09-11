import { Client, Message } from '@stomp/stompjs';
import * as WebSocket from 'ws';


//@ts-ignore
Object.assign(global, { WebSocket });

const HOST = 'ws://172.17.0.2:15674/ws/'

const client = new Client({
  brokerURL: HOST,
  connectHeaders: {
    username: 'rabbitmq',
    password: 'rabbitmq',
  },
  heartbeatIncoming: 0,
  heartbeatOutgoing: 0
})

client.onConnect =
  frame => console.log("Connected to stomp server at", HOST);


client.onDisconnect =
  frame => console.log("Disconnected to stomp server at", HOST);


client.activate()


export default client;