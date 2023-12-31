import mongoose from "mongoose";

const UserShema = mongoose.Schema({
    
    name: {
        type: String,
        unique: true,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

},
{
    timestamps: true
})

// export default mongoose.model('User', UserShema)
export default mongoose.model.User || mongoose.model('User', UserShema)