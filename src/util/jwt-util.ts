import jsonwebtoken from 'jsonwebtoken';

const options = {
    expiresIn: 6000,
};

/**
 * Encrypt data and return jwt.
 */
function sign(data: string | object | Buffer): Promise<string> {
    return new Promise((res, rej) => {
        jsonwebtoken.sign(data, 'thisismysecret', options, (err, token) => {
            return err ? rej(err) : res(token || '');
        });
    });
}

/**
 * Decrypt JWT and extract client data.
 */
function decode<T>(jwt: string): Promise<string | undefined | T> {
    return new Promise((res, rej) => {
        jsonwebtoken.verify(jwt, 'thisismysecret', (err, decoded) => {
            return err ? rej('JSON-web-token validation failed.') : res(decoded as T);
        });
    });
}


// **** Export default **** //

export default {
    sign,
    decode,
} as const;
