"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArenaSpaaceOnboardingTweetLikes = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const ArenaUser_entity_1 = require("./ArenaUser.entity");
let ArenaSpaaceOnboardingTweetLikes = class ArenaSpaaceOnboardingTweetLikes extends typeorm_1.BaseEntity {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryColumn)('text'),
    (0, typeorm_1.OneToOne)(() => ArenaUser_entity_1.ArenaUser),
    (0, typeorm_1.JoinColumn)({ name: 'userTwitter', referencedColumnName: 'userTwitterId' }),
    __metadata("design:type", String)
], ArenaSpaaceOnboardingTweetLikes.prototype, "userTwitter", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryColumn)('text'),
    __metadata("design:type", String)
], ArenaSpaaceOnboardingTweetLikes.prototype, "tweetId", void 0);
ArenaSpaaceOnboardingTweetLikes = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)({ name: 'arena_spaace_onboarding_tweet_likes' })
], ArenaSpaaceOnboardingTweetLikes);
exports.ArenaSpaaceOnboardingTweetLikes = ArenaSpaaceOnboardingTweetLikes;
//# sourceMappingURL=ArenaSpaaceOnboardingTweetLikes.entity.js.map