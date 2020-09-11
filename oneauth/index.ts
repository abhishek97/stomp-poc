import client from '../lib/client';

const headers = {
    durable: 'true',  // to make sure we don't lose messages if we or broker is offline
    'auto-delete': 'false', // ensures the queue isn't deleted if no active subscribers (we can set this false)
    'prefetch-count': '1', // ensures only message from this queue goes to a subscriber at a time
    ack: 'client-individual', // don't consider messages delivered unless we explicility call .ack() for every message;
}

setTimeout(() => {
    client.subscribe('/topic/amoeba.run_attempt.created', (data) => {
        console.log("Recieved: ", data.body)
        // data.nack({requeue: 'false'});  // requeue: false (default: true) 
        // data.ack()
    }, headers);

}, 1000)


