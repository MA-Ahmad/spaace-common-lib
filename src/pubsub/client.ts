import { PubSub } from '@google-cloud/pubsub';
import * as dotenv from 'dotenv';
import { Topics, Subscriptions } from './types';

dotenv.config();

class PubSubClient {
  private pubsub: PubSub;

  constructor() {
    this.pubsub = new PubSub({
      projectId: process.env.PUBSUB_PROJECT_ID,
    });
  }

  /**
   * Initialize the PubSub client.
   * Create topics and subscriptions if they don't exist.
   */
  public async init() {
    await this.createTopics();
    await this.createSubscriptions();
  }

  /**
   * Create topics if they don't exist
   */
  private async createTopics() {
    const topics = Object.values(Topics);
    for (const topic of topics) {
      try {
        await this.pubsub.createTopic(topic);
        console.log(`Topic ${topic} created`);
      } catch (error) {
        console.log('Topic already exists:', topic);
      }
    }
  }

  /**
   * Create subscriptions if they don't exist
   */
  private async createSubscriptions() {
    const [topics] = await this.pubsub.getTopics();
    const subscriptions = Object.values(Subscriptions);

    subscriptions.forEach(async (subscription, idx) => {
      const topic = topics[idx];

      try {
        await topic.createSubscription(subscription);
        console.log(
          `Subscription ${subscription} to topic ${topic.name} created`,
        );
      } catch (error) {
        console.log(
          `Subscription ${subscription} to topic ${topic.name} already exists`,
        );
      }
    });
  }

  /**
   * Publish a message to a topic
   * @param topicName - Topic name
   * @param data - Data to publish
   * @returns Message ID or null if error
   */
  public publish(topicName: Topics, data: any): Promise<string> | null {
    const dataBuffer = Buffer.from(JSON.stringify(data));
    try {
      return this.pubsub.topic(topicName).publishMessage({
        data: dataBuffer,
      });
    } catch (error) {
      console.log('Error publishing message:', error);
      return null;
    }
  }

  /**
   * Subscribe to a topic and listen for related messages
   * @param subscriptionName - Subscription name
   * @param callback - Callback function
   */
  public subscribe(subscriptionName: Subscriptions, callback: () => any) {
    const subscription = this.pubsub.subscription(subscriptionName);
    subscription.on('message', callback);
  }
}

export default new PubSubClient();
