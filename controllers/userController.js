const User = require('../models/User')

const info = async (req, res) => {
    // console.log('made it to our route!')
    // console.log('user id:', req.userId)

    try {
        const foundUser = await User.findById(req.userId)

        res.status(200).json({
            userid: req.userId,
            username: foundUser.username,
            email: foundUser.email
        })

    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const allUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({users})
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

const clear = async (req, res) => {
    try {
        await User.deleteMany({})
        res.status(200).json({ msg: 'All users have been deleted.'})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const edit = async (req, res) => {
    // try adding bcrypt salt and hash to password
    try {
        console.log(req.userId)
        const foundUser = await User.findByIdAndUpdate(req.userId, req.body)
        res.status(200).json({ msg: foundUser})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    info,
    allUsers,
    clear,
    edit
}