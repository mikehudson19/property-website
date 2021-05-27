"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const user_routes_1 = require("./app/routes/user-routes");
const advert_routes_1 = require("./app/routes/advert-routes");
const city_routes_1 = require("./app/routes/city-routes");
const passport_1 = __importDefault(require("passport"));
const app = express_1.default();
// db.sequelize.sync().then(() => console.log('db synced'));
// Pass the global passport object into the configuration function
require('./app/config/passport')(passport_1.default);
// This will initialize the passport object on every request
app.use(passport_1.default.initialize());
dotenv.config();
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use("/users", user_routes_1.userRouter);
app.use("/adverts", advert_routes_1.advertRouter);
app.use("/cities", city_routes_1.cityRouter);
app.listen(3000, () => {
    console.log("Node server started running on port 3000");
});
