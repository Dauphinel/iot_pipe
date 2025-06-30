from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("IoTStreaming").getOrCreate()

df = spark.readStream.format("kafka") \
    .option("kafka.bootstrap.servers", "kafka-1:9092") \
    .option("subscribe", "iot_topic") \
    .option("startingOffsets", "earliest") \
    .load()

df_string = df.selectExpr("CAST(value AS STRING) as message")

query = df_string.writeStream \
    .format("console") \
    .start()

query.awaitTermination()
