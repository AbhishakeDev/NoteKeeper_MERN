import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        // console.log(req);
        const token = req.headers.authorization.split(' ')[1];

        const isCustomAuth = token.length < 500;

        let decodedData;
        //without google auth
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, 'test');
            req.userId = decodedData?.id;
        }
        //google oauth
        else {
            decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;