const controller = require("../controllers/auth.controllers");
const { verifySignUp } = require("../middlewares/authjwt");

module.exports = function(app) {

    app.post("/ecomm/api/v1/auth/signup" ,controller.signup);
    app.post("/ecomm/api/v1/auth/signin", controller.signin);
};
