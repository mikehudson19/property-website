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
exports.UserController = void 0;
const models_1 = require("../../models");
const jwt_utils_1 = require("../lib/jwt-utils");
class UserController {
    users(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield models_1.db.User.findAndCountAll({});
            res.send(users);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield models_1.db.User.findOne({ where: { email: req.body.email } });
            if (!user) {
                res.status(401).json({ success: false, msg: "No user with that name exists" });
            }
            const isValid = jwt_utils_1.JwtUtils.validPassword(req.body.password, user.hash, user.salt);
            if (isValid) {
                const tokenObject = jwt_utils_1.JwtUtils.issueJwt(user);
                res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
            }
            else {
                res.status(401).json({ success: false, msg: "You entered the wrong password" });
            }
        });
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const saltHash = jwt_utils_1.JwtUtils.genPassword(req.body.password);
            const salt = saltHash.salt;
            const hash = saltHash.hash;
            const newUser = yield models_1.db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                hash: hash,
                salt: salt
            });
            return res.json({ success: true, user: newUser });
        });
    }
    getProtectedTest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!" });
        });
    }
}
exports.UserController = UserController;
