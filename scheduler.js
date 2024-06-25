import pkg from 'bullmq';
const { QueueScheduler, Worker, Queue } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const queueName = 'email-queue';
const redisConfig = {
  host: 'localhost',
  port: 6379,
  password: process.env.REDIS_PASSWORD,
};

export async function scheduleEmailChecking() {
  try {
    const queueScheduler = new QueueScheduler(queueName, {
      connection: redisConfig,
    });

    const worker = new Worker(queueName, async job => {
      console.log(`Processing job: ${job.id}`);
    }, {
      connection: redisConfig,
    });

    console.log(`Worker and scheduler started for queue '${queueName}'`);
  } catch (error) {
    console.error('Error starting worker and scheduler:', error);
  }
}
