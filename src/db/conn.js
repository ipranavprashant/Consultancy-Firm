const mongoose = require("mongoose");

// creating a database 
mongoose.connect("mongodb+srv://ipranavprashant:ipranavprashant@cluster0.2tq2oou.mongodb.net/?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
