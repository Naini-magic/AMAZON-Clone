const mongoose = require("mongoose")


const DB = process.env.DATABASE ;

// mongodb+srv://SUNAINI01_04:<password>@cluster0.xydqge5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongoose.connect(DB).then(() => console.log("data base connected")).catch((error) => )



mongoose.connect(DB).then((conn) => {
    // console.log(conn);
    console.log("mongodb connected successfully !!!!");
}).catch((error) =>{
    console.log("error" + error.message)
});

