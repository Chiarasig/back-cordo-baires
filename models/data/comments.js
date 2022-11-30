let comments = [
    {
        "showId": "63703fe0e2e57447bfe78e18",
        "userId": "638626240e9cff01f10e52c2",
        "date": new Date ("11-22-2022"),
        "comment": "I love this woman, she is beautifull"
    }
]

require('dotenv').config()
require('../../config/database')
const Comment = require('../Comment')

comments.forEach(element => {
    Comment.create({
        showId: element.showId,
        userId: element.userId,
        date: element.date,
        comment: element.comment
    })
})