import mongoose from "mongoose";

const PostShema = mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true
    },

    img: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

},
{
    timestamps: true
})

export default mongoose.model('Post', PostShema)
// export default mongoose.model.Post || mongoose.model('Post', PostShema)