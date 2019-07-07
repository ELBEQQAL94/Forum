/* this function return not found error if it is */
function notFound(req,res,next){
    // return error message with url error
    const error = new Error(`Page Not Found - ${req.originalUrl}`);
    res.status(400);
    next(error);
};

/* error handler */
function errorHandler(error,req,res,next){
    // return status code of error
    res.status(res.statusCode || 500);

    // send message error
    res.json({
        message: error.message,
        error: process.env.NODE_ENV === 'production' ? {} : error.stack
    });
};

module.exports = {
    notFound,
    errorHandler
};