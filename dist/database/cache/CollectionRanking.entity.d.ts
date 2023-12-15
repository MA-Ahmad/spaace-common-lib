import { BaseEntity } from 'typeorm';
export declare class CollectionRankingCached extends BaseEntity {
    address: string;
    volume: string;
    volume1h: string;
    volume6h: string;
    volume24h: string;
    volume7d: string;
    volume30d: string;
    volume90d: string;
    previousVolume1h: string;
    previousVolume6h: string;
    previousVolume24h: string;
    previousVolume7d: string;
    previousVolume30d: string;
    previousVolume90d: string;
    floorPrice: string | null;
    previousFloorPrice1h: string | null;
    previousFloorPrice6h: string | null;
    previousFloorPrice24h: string | null;
    previousFloorPrice7d: string | null;
    previousFloorPrice30d: string | null;
    previousFloorPrice90d: string | null;
    saleCount: string;
    saleCount1h: string;
    saleCount6h: string;
    saleCount24h: string;
    saleCount7d: string;
    saleCount30d: string;
    saleCount90d: string;
    previousSaleCount1h: string;
    previousSaleCount6h: string;
    previousSaleCount24h: string;
    previousSaleCount7d: string;
    previousSaleCount30d: string;
    previousSaleCount90d: string;
    totalSupply: string;
    ownerCount: string;
    listedCount: string;
}
