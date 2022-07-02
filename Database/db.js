const mongoose =require("mongoose")

const Connection = async () => {
    const URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.a46vg.mongodb.net/?retryWrites=true&w=majority`;


    try {

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = Connection