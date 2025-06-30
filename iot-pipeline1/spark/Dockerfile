FROM bitnami/spark:3.3.2

USER root

RUN pip install requests

ENV SPARK_HOME=/opt/bitnami/spark


ADD https://repo1.maven.org/maven2/org/apache/spark/spark-sql-kafka-0-10_2.12/3.3.2/spark-sql-kafka-0-10_2.12-3.3.2.jar /opt/bitnami/spark/jars/
ADD https://repo1.maven.org/maven2/org/apache/kafka/kafka-clients/3.3.2/kafka-clients-3.3.2.jar /opt/bitnami/spark/jars/
ADD https://repo1.maven.org/maven2/org/apache/kafka/kafka_2.12/3.3.2/kafka_2.12-3.3.2.jar /opt/bitnami/spark/jars/
ADD https://repo1.maven.org/maven2/org/apache/kafka/connect-api/3.3.2/connect-api-3.3.2.jar /opt/bitnami/spark/jars/
ADD https://repo1.maven.org/maven2/org/apache/kafka/connect-runtime/3.3.2/connect-runtime-3.3.2.jar /opt/bitnami/spark/jars/
ADD https://repo1.maven.org/maven2/org/apache/kafka/connect-json/3.3.2/connect-json-3.3.2.jar /opt/bitnami/spark/jars/
ADD https://repo1.maven.org/maven2/org/apache/kafka/connect-file/3.3.2/connect-file-3.3.2.jar /opt/bitnami/spark/jars/

COPY spark_streaming.py /app/

CMD [ "spark-submit", "/app/spark_streaming.py" ]
