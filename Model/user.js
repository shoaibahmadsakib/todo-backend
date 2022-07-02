
const mongoose =require("mongoose")


// how our document look like
const userSchema = mongoose.Schema({
    name: String,
   
    phone: Number
});


// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

module.exports = postUser;