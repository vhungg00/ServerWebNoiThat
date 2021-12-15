const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: { type: String,required: [true, "can't be blank"],
        index: true,lowercase: true, match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    firstName: { type: String },
    lastName: { type: String},
    password: { type: String, required:[true, "can't be blank"] },
    address: { type: String},
    phone_number: { type: String, required: true },
    is_admin: { type: Boolean, default: false },
    is_verify: { type: Boolean, default: false },
    token: { type: String },
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: null},
    deleteAt: {type: Date, default: null}
})
UserSchema.statics  = {
    createNew (item) {
        return this.create(item);
    },
    checkAdmin(email) {
        return this.findOne({"email": email, "is_admin": true});
    }, 
    userFind (email) {
        return  this.findOne({"email": email, "is_admin": false})
    }
}

module.exports = mongoose.model('user', UserSchema)