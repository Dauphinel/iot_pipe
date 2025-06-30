const mqtt = require('mqtt');
const kafka = require('kafka-node');

const mqttClient = mqtt.connect('mqtt://mosquitto-1:1883');

const kafkaClient = new kafka.KafkaClient({ kafkaHost: 'kafka-1:9092' });
const producer = new kafka.Producer(kafkaClient);

mqttClient.on('connect', () => {
  console.log('✅ MQTT connected');
  mqttClient.subscribe('iot/data', (err) => {
    if (!err) console.log('📡 Subscribed to iot/data');
    else console.error('❌ MQTT subscribe error:', err);
  });
});

mqttClient.on('message', (topic, message) => {
  console.log(`📥 MQTT received on topic "${topic}": ${message.toString()}`);

  const kafkaMessage = [
    {
      topic: 'iot_test',
      messages: message.toString(),
    },
  ];

  producer.send(kafkaMessage, (err, data) => {
    if (err) {
      console.error('❌ Kafka send error', err);
    } else {
      console.log('➡️ Message sent to Kafka', data);
    }
  });
});

producer.on('ready', () => {
  console.log('✅ Kafka Producer is ready');
});

producer.on('error', (err) => {
  console.error('❌ Kafka Producer error', err);
});
