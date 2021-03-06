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
exports.NFTCollectionTaskSchema = exports.NFTCollectionTask = exports.MessageStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var MessageStatus;
(function (MessageStatus) {
    MessageStatus["sent"] = "sent";
    MessageStatus["processing"] = "processing";
    MessageStatus["done"] = "done";
    MessageStatus["error"] = "error";
    MessageStatus["splitted"] = "splitted";
})(MessageStatus = exports.MessageStatus || (exports.MessageStatus = {}));
let NFTCollectionTask = class NFTCollectionTask {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, require: true }),
    __metadata("design:type", String)
], NFTCollectionTask.prototype, "messageId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTCollectionTask.prototype, "contractAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, index: true, required: true }),
    __metadata("design:type", String)
], NFTCollectionTask.prototype, "tokenType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", Number)
], NFTCollectionTask.prototype, "startBlock", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", Number)
], NFTCollectionTask.prototype, "endBlock", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        index: true,
        required: true,
    }),
    __metadata("design:type", String)
], NFTCollectionTask.prototype, "status", void 0);
NFTCollectionTask = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, collection: 'nft-collection-tasks' })
], NFTCollectionTask);
exports.NFTCollectionTask = NFTCollectionTask;
exports.NFTCollectionTaskSchema = mongoose_1.SchemaFactory.createForClass(NFTCollectionTask);
//# sourceMappingURL=nft-collection-task.schema.js.map