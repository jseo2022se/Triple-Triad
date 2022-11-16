const User = require('../models/User')
const bcrypt = require('bcrypt')

const info = async (req, res) => {

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
    
    try {
        console.log(req.userId)
        const salt = await bcrypt.genSalt(10)
        const encryptedPassword = await bcrypt.hash(req.body.password, salt)
        const foundUser = await User.findByIdAndUpdate(req.userId, {...req.body, password: encryptedPassword})
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