const jwt= require("../utils/jwt");

const asureAuth = (req,res,next) => {
    if (!req.jeaders.authorization) {
        return res
        .status(403)
        .send({msg: "La peticion no tiene la cabecera de utenticación"});
    }
    const token = req.headers.authorization.replace("Bearer ", "");
    try{
        const pyload = jwt.decoded(token);
        const {exp} = payload;
        const currentData = new Date().getTime();
        if (exp <= currentData) {
            return res.status(400).send({msg: "El token ha expirado"});
        }
        req.user = paiload;
        next();
    }catch (error){
        return res.status(400).send({msg: "Token invalido"});
    }
};
module.exports = {
    asureAuth,
};
