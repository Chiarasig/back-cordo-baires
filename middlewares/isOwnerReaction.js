const {shouldBeOwner} = require('../config/responses')

const isOwnerReaction = model => [
    async (req, res, next) => {
        let action = await model.findOne({_id: req.params.id});
        if (action.userId.filter((user)=> req.user.idUser === user)) {
            return next();
        }
        return shouldBeOwner(req, res);
    }
]

module.exports = isOwnerReaction