const mongoose = require('mongoose');

mongoose.set('strictQuery', true)


mongoose.connect("mongodb+srv://root:root@cluster0.fzssz8m.mongodb.net/store_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err))