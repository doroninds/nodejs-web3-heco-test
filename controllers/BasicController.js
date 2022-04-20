

class BasicController {

    response(data = null, error = null) {
        return {
            jsonapi: {
                version: '1.0',
            },
            data,
            error,
            meta: {
                env: process.env.NODE_ENV
            }
        }
    }
}

module.exports = BasicController