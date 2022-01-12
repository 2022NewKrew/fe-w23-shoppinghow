const express = require('express')
const path = require('path')
const router = express.Router()
const fs = require('fs')

const keywordList = JSON.parse(fs.readFileSync(__dirname + '/../data/goodsKeyword.json'))

router.use('/', (req, res) => {
    const { searches, count } = req.query
    const targetKeyword = []
    
    keywordList.forEach((keyword) => {
        if (keyword.includes(searches)) {
            targetKeyword.push(keyword)
    
            if (targetKeyword.length === count) {
                return false
            }
        }
    })
    
    res.send(JSON.stringify(targetKeyword))
})

module.exports = router
