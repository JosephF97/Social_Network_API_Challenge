const { Schema, model} = require('mongoose');
const Thought = require('./thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+\@.+\..+/, 'Must match a valid email address'],
        },
        thoughts: {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
        },
        friends: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    {
        toJSON: {
           virtuals : true,
        },
        id: false,
    }
);
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});
