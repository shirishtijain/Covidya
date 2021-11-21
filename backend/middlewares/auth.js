const User = require('../models/user')

const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");


// Checks if user is authenticated or not
exports.isAuthenticatedUser =async (req, res, next) => {

    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler('Login first to access this resource.', 401))
    }

    const decoded = jwt.verify(token,"secret_this_should_be_longer")
    req.user = await User.findById(decoded.id);

    next()
}
