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
exports.UserInteraction = exports.UserInteractionType = void 0;
const graphql_1 = require("@nestjs/graphql");
var UserInteractionType;
(function (UserInteractionType) {
    UserInteractionType[UserInteractionType["DAILY_CLAIM"] = 0] = "DAILY_CLAIM";
    UserInteractionType[UserInteractionType["BUY_NOW"] = 1] = "BUY_NOW";
    UserInteractionType[UserInteractionType["SELL_INSTANTLY"] = 2] = "SELL_INSTANTLY";
    UserInteractionType[UserInteractionType["SWEEP_FLOOR"] = 3] = "SWEEP_FLOOR";
})(UserInteractionType = exports.UserInteractionType || (exports.UserInteractionType = {}));
(0, graphql_1.registerEnumType)(UserInteractionType, {
    name: 'UserInteractionType',
});
let UserInteraction = class UserInteraction {
};
__decorate([
    (0, graphql_1.Field)(() => UserInteractionType),
    __metadata("design:type", Number)
], UserInteraction.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], UserInteraction.prototype, "userAddress", void 0);
UserInteraction = __decorate([
    (0, graphql_1.ObjectType)()
], UserInteraction);
exports.UserInteraction = UserInteraction;
//# sourceMappingURL=UserInteraction.js.map