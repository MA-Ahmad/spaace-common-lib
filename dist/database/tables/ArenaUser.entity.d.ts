import { BaseEntity } from 'typeorm';
export declare class ArenaUser extends BaseEntity {
    twitterUsername: string;
    twitterId: string;
    name: string | null;
    imageUrl: string | null;
    referralCode: string;
    referrerUsername: string | null;
    loyatyPointsEarned: string;
    totalStarsEarned: string;
    level: string;
    dailyStreak: string;
    lastActive: Date;
    timestamp: Date;
}
