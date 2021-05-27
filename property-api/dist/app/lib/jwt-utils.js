"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtUtils = void 0;
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtUtils {
    static validPassword(password, hash, salt) {
        var hashVerify = crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
        return hash === hashVerify;
    }
    static genPassword(password) {
        var salt = crypto_1.default.randomBytes(32).toString('hex');
        var genHash = crypto_1.default.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
        return {
            salt: salt,
            hash: genHash
        };
    }
    static issueJwt(user) {
        const id = user.id;
        const expiresIn = '1d';
        const payload = {
            user: user,
            sub: id,
            iat: Date.now()
        };
        const signedToken = jsonwebtoken_1.default.sign(payload, 'thissecretekeyshuldbein.envfile', { expiresIn: expiresIn, algorithm: 'HS256' });
        return {
            token: signedToken,
            expires: expiresIn
        };
    }
}
exports.JwtUtils = JwtUtils;
