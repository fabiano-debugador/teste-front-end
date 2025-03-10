"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.AuthenticateUseCase = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const tokenKey = process.env.TOKEN_KEY || "13f3b6cb-3f98-4258-93c7-82878099f1d9";
class AuthenticateUseCase {
    constructor(authenticateRepository) {
        this.authenticateRepository = authenticateRepository;
    }
    execute({ name, email }) {
        return __awaiter(this, void 0, void 0, function* () {
            const userExist = yield this.authenticateRepository.verifyLogin(name, email);
            if (!userExist) {
                throw new Error("Name or password incorrect");
            }
            const token = (0, jsonwebtoken_1.sign)({}, tokenKey, {
                subject: userExist.id,
                expiresIn: "36000000s",
            });
            return { token };
        });
    }
}
exports.AuthenticateUseCase = AuthenticateUseCase;
