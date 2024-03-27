import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryColumn,
  BaseEntity,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ArenaUser, ArenaSeason, ArenaDivision, ArenaDivisionName } from '.';

@ObjectType()
@Entity({ name: 'arena_users_progress' })
export class ArenaUserProgress extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn('text')
  @ManyToOne(() => ArenaUser)
  @JoinColumn({ name: 'userTwitter', referencedColumnName: 'userTwitterId' })
  userTwitter!: string;

  @Field(() => String)
  @PrimaryColumn('numeric', { precision: 78, unsigned: true }) // 78 digits = Maximum uint256 value
  @ManyToOne(() => ArenaSeason)
  @JoinColumn({ name: 'seasonNumber', referencedColumnName: 'number' })
  seasonNumber!: string;

  @Field(() => String)
  @Column('numeric', { precision: 78, unsigned: true, default: '0' })
  stars!: string;

  @Field(() => String)
  @Column('numeric', { precision: 78, unsigned: true, default: '0' })
  crewStars!: string;

  @Field(() => String)
  @Column('numeric', { precision: 78, unsigned: true, default: '0' })
  xp!: string;

  @Field(() => String)
  @Column('bigint', { default: '0' })
  questCompleted!: string;

  @Field(() => ArenaDivisionName, { nullable: true })
  @Column('enum', {
    enum: ArenaDivisionName,
    enumName: 'arena_divison_name',
    nullable: true,
  })
  @ManyToOne(() => ArenaDivision, { nullable: true })
  @JoinColumn([
    { name: 'seasonNumber', referencedColumnName: 'seasonNumber' },
    { name: 'division', referencedColumnName: 'name' },
  ])
  division!: string;

  @Field(() => String)
  @Column('text', { nullable: true })
  league!: string;

  @Field(() => String)
  @Column('numeric', { precision: 78, unsigned: true, default: '0' })
  rank!: string;

  @Field(() => String)
  @Column('numeric', { precision: 78, unsigned: true, default: '0' })
  leagueRank!: string;

  @Field(() => String)
  @Column('numeric', { precision: 78, unsigned: true, default: '0' })
  crewRank!: string;
}
