// import authmodel from './models.Auth'

const express = require("express");
const mongoose = require("mongoose");
const Auth = require("./models/Auth");
const cors= require ("cors")
const app = express();

const authmodel = require('./models/Auth')

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://EvelyneW:z5y3vgUe5JhMmXr8@crud.dc2lucr.mongodb.net/auth?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

//posting data to mongo db

app.post('/insert',async (req, res) => {
    const name = req.body.name
    const email= req.body.email
    const password = req.body.password
    const phone= req.body.phone

    const auth = new authmodel({email: email, password:password, name:name, phone: phone });

try{
  await auth.save();
} catch(err)
// console.log(Auth)
{
    console.log(err)
}
});

//getting data
// (localhost:3000/read) will get you all the data in the db
app.get('/read',async (req, res) => {
//  authmodel.find({$where: {name: "evelyne"}}) will return all data in the db where food name is called apple
authmodel.find({}, (err, result) => {
    if(err){
        res.send(err);
    }
    res.send(result);
})

});

app.listen(3001, () => {
    console.log("Server is running on port 3001 ...");
});