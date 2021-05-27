import { db } from "../../models";
import { JwtUtils } from '../lib/jwt-utils';


export class UserController {
  async users (req: any, res: any) {

    const users = await db.User.findAndCountAll({});

    res.send(users);
  }

  async login(req: any, res: any) {

    const user = await db.User.findOne({ where: { email: req.body.email } })

    if (!user) {
        res.status(401).json({ success: false, msg: "No user with that name exists" });
    }

    const isValid = JwtUtils.validPassword(req.body.password, user.hash, user.salt);

    if (isValid) {
        const tokenObject = JwtUtils.issueJwt(user);
        res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
    } else {
        res.status(401).json({ success: false, msg: "You entered the wrong password" });
    }
  }

  async register(req: any, res: any) {
    const saltHash = JwtUtils.genPassword(req.body.password);
    
    const salt = saltHash.salt;
    const hash = saltHash.hash;
    
    const newUser = await db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      hash: hash,
      salt: salt
  });

    return res.json({success: true, user: newUser})
  }

  async getProtectedTest(req: any, res: any) {
      res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!" })
  }
}
