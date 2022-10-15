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
exports.DatabaseAuthenticateRepository = void 0;
class DatabaseAuthenticateRepository {
    constructor() {
        this.users = [
            {
                id: "9324171b-99f3-42bf-80b1-8ebe459a17a7",
                name: "Fabiano",
                email: "fabiano@mail.com",
            },
        ];
    }
    verifyLogin(name, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.users.find((user) => user.email === email && user.name === name);
            if (!user)
                return null;
            return user;
        });
    }
}
exports.DatabaseAuthenticateRepository = DatabaseAuthenticateRepository;
