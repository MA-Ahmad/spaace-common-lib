import { registerEnumType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { ItemEntity, CollectionEntity } from '.';
import * as utils from '../../utils';

export enum Marketplace {
  SPAACE = 'SPAACE',
  OPENSEA = 'OPENSEA',
  BLUR = 'BLUR',
}

registerEnumType(Marketplace, {
  name: 'Marketplace',
});

export enum OrderType {
  ASK = 'ASK',
  BID = 'BID',
  ENGLISH_AUCTION = 'ENGLISH_AUCTION',
  DUTCH_AUCTION = 'DUTCH_AUCTION',
}

registerEnumType(OrderType, {
  name: 'OrderType',
});

@Entity({ name: 'orders' })
@Index(['collectionAddress', 'tokenId', 'endTime'], {
  where: `"type" IN ('${OrderType.ASK}', '${
    OrderType.DUTCH_AUCTION
  }') AND "cancelTimestamp" IS NULL AND "currency" IN ('${utils
    .strip0x(utils.constants.ETH_TOKENS)
    .join("','")}')`,
})
@Index(['collectionAddress', 'tokenId', 'endTime'], {
  where: `"type" = '${
    OrderType.BID
  }' AND "cancelTimestamp" IS NULL AND "currency" IN ('${utils
    .strip0x(utils.constants.ETH_TOKENS)
    .join("','")}')`,
})
@Index(['collectionAddress', 'tokenId', 'endTime'], {
  where: `"type" = '${
    OrderType.ENGLISH_AUCTION
  }' AND "cancelTimestamp" IS NULL AND "currency" IN ('${utils
    .strip0x(utils.constants.ETH_TOKENS)
    .join("','")}')`,
})
@Index(['userAddress', 'collectionAddress', 'tokenId'])
@Index(['userAddress', 'counter'])
export class OrderEntity extends BaseEntity {
  @PrimaryColumn('char', { length: 64 })
  hash!: string;

  @Column('char', { length: 40 })
  // No foreign key to the User entity because of aggregation of other marketplaces
  userAddress!: string;

  @Column('char', { length: 40 })
  @ManyToOne(() => CollectionEntity)
  @JoinColumn({ name: 'collectionAddress', referencedColumnName: 'address' })
  collectionAddress!: string;

  @Column('numeric', { precision: 78, unsigned: true, nullable: true }) // 78 digits = Maximum uint256 value
  @ManyToOne(() => ItemEntity, { nullable: true })
  @JoinColumn([
    { name: 'collectionAddress', referencedColumnName: 'collectionAddress' },
    { name: 'tokenId', referencedColumnName: 'tokenId' },
  ])
  tokenId!: string | null;

  @Column('enum', { enum: OrderType, enumName: 'order_type' })
  type!: OrderType;

  @Column('enum', { enum: Marketplace, enumName: 'marketplace' })
  marketplace!: Marketplace;

  @Column('numeric', { precision: 78, unsigned: true })
  price!: string;

  @Column('numeric', { precision: 78, unsigned: true, nullable: true })
  startingPrice!: string | null;

  @Column('char', { length: 40 })
  currency!: string;

  @Column('timestamp without time zone')
  startTime!: Date;

  @Column('timestamp without time zone', { nullable: true })
  endTime!: Date | null;

  @Column('numeric', { precision: 78, unsigned: true })
  counter!: string;

  @Column('text')
  signature!: string;

  @Column('char', { length: 64, nullable: true })
  cancelTxHash!: string | null;

  @Column('numeric', { precision: 78, unsigned: true, nullable: true })
  cancelLogIdx!: string | null;

  @Column('timestamp without time zone', { nullable: true })
  cancelTimestamp!: Date | null;

  @Column('numeric', { precision: 78, unsigned: true })
  royalties!: string;

  @Column('numeric', { precision: 78, unsigned: true, nullable: true })
  startingRoyalties!: string | null;
}
