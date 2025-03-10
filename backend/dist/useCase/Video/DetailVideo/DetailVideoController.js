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
exports.DetailVideoController = void 0;
class DetailVideoController {
    constructor(detailVideoUseCase) {
        this.detailVideoUseCase = detailVideoUseCase;
    }
    handle(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = request.query.id;
            try {
                const result = yield this.detailVideoUseCase.execute({
                    id,
                });
                if (!result)
                    return response.status(404).json({ message: "Video not found" });
                return response.status(200).send(result);
            }
            catch (error) {
                return response.status(400).json({ message: "Opss something is wrong" });
            }
        });
    }
}
exports.DetailVideoController = DetailVideoController;
