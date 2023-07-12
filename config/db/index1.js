const mongoose = require('mongoose')

async function connect(){
    try {
        //mongodb+srv://vtp5332:<password>@cluster0.fbqwsig.mongodb.net/
        //mongodb+srv://vtp5330:<password>@cluster0.6zftsl6.mongodb.net/
        //mongodb+srv://vtp5330:<password>@cluster0.6zftsl6.mongodb.net/?retryWrites=true&w=majority
        await mongoose.connect('mongodb+srv://vtp5330:<password>@cluster0.6zftsl6.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('connect successfully')
        
    } catch (error) {
        console.log('connect false')
    }
}

module.exports = {connect}