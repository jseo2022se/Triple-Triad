const jwt = require('jsonwebtoken')

function authorize(req, res, next) {

    // console.log('authorize: ',req.body)
    try {

        let token = req.header("Authorization")

        if(!token) {
            throw new Error('No token provided!')
        }
        // console.log(token, 'checking token authorize')
        token = token.replace("Bearer ", "")
        

        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(process.env.JWT_SECRET, 'checking secret')
        if (payload.error) {
            throw new Error(payload.error)
        }
        // console.log('here')
        req.userId = payload.id
        req.user = payload.user

        next()

    } catch (error) {
        // console.log("error")
        res.status(403).json({ error: error.message })
    }
}

module.exports = {
    authorize
}