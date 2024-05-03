import { BaseEntity } from 'typeorm';
import { ArenaDivisionName } from '.';
export declare class ArenaUserProgress extends BaseEntity {
    seasonNumber: string;
    userTwitterId: string;
    stars: string;
    xp: string;
    totalReferrals: string;
    totalReferralStars: string;
    questCompleted: string;
    division: ArenaDivisionName;
    league: string;
    rank: string;
    leagueRank: string;
    twentyFourHourRank: string;
}
