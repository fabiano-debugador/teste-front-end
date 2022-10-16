"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListVideoController = void 0;
class ListVideoController {
    constructor(listVideoUseCase) {
        this.listVideoUseCase = listVideoUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = request.query.value;
            const pageToken = request.query.pageToken;
            try {
                const result = yield this.listVideoUseCase.execute({
                    value,
                    pageToken,
                });
                if (!result)
                    return response.status(404).json({ message: "Saerch not found" });
                return response.status(200).send(result);
            }
            catch (error) {
                return response.status(400).json({ message: "Opss something is wrong" });
            }
        });
    }
}
exports.ListVideoController = ListVideoController;
