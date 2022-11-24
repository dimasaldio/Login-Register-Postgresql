const express = require('express')
const auth = require('./auth')
const router = express.Router()


router.use('/auth', auth)

// 404
router.use((req,res)=>{
    try {
        res.status(404).json({
            code:404,
            message:'your page is not found'
        })
    } catch (error) {
        res.status(400).json({
            code:400,
            error:error
        })
    }
})

module.exports = router