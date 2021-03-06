import { model, Schema, Document } from 'mongoose'
import bcrypt from 'bcrypt'
import { userRoles } from '../helpers/constants'

export type UserModel = Document & {
    email: string;
    password: string;
    role: string;
};


const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: userRoles,
        default: userRoles[0]
    }
})

userSchema.pre('save', function (next) {
    var user: any = this //TODO: Any???
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err)
            }

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err)
                }

                user.password = hash
                next()
            })
        })
    }
    else {
        return next()
    }
})

userSchema.methods.comparePassword = function (pw: string, cb: any) {
    bcrypt.compare(pw, this.password, (err, isMatch) => {
        if (err) {
            return cb(err)
        }
        cb(null, isMatch)
    })
}

export default model<UserModel>('User', userSchema)

