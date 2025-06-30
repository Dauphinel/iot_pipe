import paho.mqtt.client as mqtt
import time
import json
import random

client = mqtt.Client()
client.connect("localhost", 1883, 60)

while True:
    data = {
        "device": "sensor1",
        "temperature": round(random.uniform(20.0, 30.0), 2),
        "humidity": round(random.uniform(40.0, 60.0), 2),
        "timestamp": int(time.time())
    }
    client.publish("iot/data", json.dumps(data))
    print("Published:", data)
    time.sleep(2)