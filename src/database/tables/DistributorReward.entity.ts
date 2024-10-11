import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { DistributorContract } from '../enums';

@Entity({ name: 'distributor_rewards' })
@Index(['userAddress', 'distributor', 'amount'], {
  where: '"harvestTimestamp" IS NULL',
})
@Index(['userAddress', 'distributor', 'amount'], {
  where: '"harvestTimestamp" IS NOT NULL',
})
export class DistributorRewardEntity extends BaseEntity {
  @PrimaryColumn('char', { length: 40 })
  userAddress!: string;

  @PrimaryColumn('enum', {
    enum: DistributorContract,
    enumName: 'distributor_contract',
  })
  distributor!: DistributorContract;

  @PrimaryColumn('numeric', { precision: 78, unsigned: true }) // 78 digits = Maximum uint256 value
  amount!: string;

  @Column('text')
  signature!: string;

  @Column('timestamp without time zone', {
    default: () => 'CURRENT_TIMESTAMP',
  })
  timestamp!: Date;

  @Column('char', { length: 64, nullable: true })
  harvestTxHash!: string | null;

  @Column('numeric', { precision: 78, unsigned: true, nullable: true })
  harvestLogIdx!: string | null;

  @Column('timestamp without time zone', { nullable: true })
  harvestTimestamp!: Date | null;
}
