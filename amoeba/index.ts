import client from '../lib/client';


setTimeout(() => {
    client.publish({
        destination: '/topic/amoeba.run_attempt.created',
        body: JSON.stringify({
            resourceId: 1,
            operation: 'created',
            timestamp: Date.now()
        }),
        headers: {
            persistent: 'true'
        }
    });
}, 1000)


