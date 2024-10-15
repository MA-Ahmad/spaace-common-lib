import { BaseEntity } from 'typeorm';
import { OrderItemEntity } from '.';
import { Marketplace, OrderType } from '../enums';
export declare class OrderEntity extends BaseEntity {
    hash: string;
    userAddress: string;
    collectionAddress: string;
    type: OrderType;
    marketplace: Marketplace;
    price: string;
    startingPrice: string | null;
    currency: string;
    marketplaceFeeBps: number;
    marketplaceFeeReceiver: string | null;
    royaltiesBps: number;
    startingRoyalties: string | null;
    royaltiesReceiver: string | null;
    startTime: Date;
    endTime: Date | null;
    counter: string;
    signature: string;
    salt: string;
    zone: string;
    conduitKey: string;
    protocolAddress: string | null;
    cancelTxHash: string | null;
    cancelLogIdx: string | null;
    cancelTimestamp: Date | null;
    fulfillQuantity: string;
    remainingQuantity: string;
    tokens: OrderItemEntity[];
}
