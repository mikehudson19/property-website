"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const fs = require('fs');
const path = require('path');
const models_1 = require("../../models");
// export class Passport {
//     static passportConfig() {
//     }
// }
// Go up one directory, then look for file name
const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
// The verifying public key
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');
// At a minimum, you must pass the `jwtFromRequest` and `secretOrKey` properties
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'thissecretekeyshuldbein.envfile',
    algorithms: ['HS256']
};
// app.js will pass the global passport object here, and this function will configure it
module.exports = (passport) => {
    // The JWT payload is passed into the verify callback
    passport.use(new JwtStrategy(options, function (jwt_payload, done) {
        // Since we are here, the JWT is valid!
        // We will assign the `sub` property on the JWT to the database ID of user
        models_1.db.User.findOne({ where: { id: jwt_payload.sub } })
            .then((user) => {
            if (user) {
                // Since we are here, the JWT is valid and our user is valid, so we are authorized!
                return done(null, user);
            }
            else {
                return done(null, false);
            }
        })
            .catch((err) => {
            return done(err, false);
        });
    }));
};
