const { Schema, Model} = require('mongoose');
const ReactSchema = reuire('./reaction');
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "What's on your mind?",
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
        type: String,
        required: true,
        },
        reaction: [ReactSchema]
    },
    {
    toJSON: {
        getters: true,
    },
    id: false,
    }
);
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reaction.length;
});
module.exports = Thought;