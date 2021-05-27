import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export class JwtUtils {

  static validPassword(password: any, hash: any, salt: any) {
    var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
  }

  static genPassword(password: any) {
    var salt = crypto.randomBytes(32).toString('hex');
    var genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    
    return {
      salt: salt,
      hash: genHash
    };
  }

  static issueJwt(user: any) {
    const id = user.id;
    const expiresIn = '1d';
  
    const payload = {
      user: user,
      sub: id,
      iat: Date.now()
    };

    const signedToken = jwt.sign(payload, 'thissecretekeyshuldbein.envfile', { expiresIn: expiresIn, algorithm: 'HS256' });

    return {
      token: signedToken,
      expires: expiresIn
    }
  }
}