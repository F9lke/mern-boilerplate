const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    avatar: {
        type: String
    },
    administrators: [
        {
            user: {
                type: Schema.Types.ObjectId,
                type: String
            }
        }
    ],
    members: [
        {
            user: {
                type: Schema.Types.ObjectId,
                type: String
            }
        }
    ],
    created_by: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = Group = mongoose.model("groups", GroupSchema);
