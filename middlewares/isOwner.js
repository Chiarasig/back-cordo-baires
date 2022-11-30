const {shouldBeOwner} = require('../config/responses')

const isOwner = model => [
    async (req, res, next) => {
        let action = await model.findOne ({_id: req.params.id});
        if (action.userId.equals(req.user.idUser)){
            return next();
        }
        return shouldBeOwner(req, res);
    }
]

module.exports = isOwner