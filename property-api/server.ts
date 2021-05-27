import * as dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";
// import {orderRouter} from "./routes/orderRouter";
import { db } from "./models/index";
import { userRouter } from "./app/routes/user-routes";
import { advertRouter } from "./app/routes/advert-routes";
import { cityRouter } from "./app/routes/city-routes";
import passport from "passport";

const app = express();

// db.sequelize.sync().then(() => console.log('db synced'));

// Pass the global passport object into the configuration function
require('./app/config/passport')(passport);

// This will initialize the passport object on every request
app.use(passport.initialize());

dotenv.config();
	
var cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/adverts", advertRouter);
app.use("/cities", cityRouter);

app.listen(3000, () => {
  console.log("Node server started running on port 3000");
});