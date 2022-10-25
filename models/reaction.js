const { Schema, Types} = require('mongoose');

const ReactSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId(),
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: 'Your reaction',
            maxlength: 280
        },
        username: {
            type: String,
            required: 'Username required'
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
);

module.exports = ReactSchema;