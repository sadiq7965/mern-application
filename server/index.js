
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const FriendModel = require('./models/Friends')
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// MONGO CONNECTION 
mongoose.connect("mongodb://127.0.0.1:27017/friend",
    // {useNewUrlParser:true}
);
// now just get data from bd and send it to ui 
// app.get('/read', async (req, res) => {
//     // server is ready 
//     // get data from database by its module name 
//     FriendModel.find({}, console.log(resylt));
//     res.send('worked')
// });

app.post('/add', async (req, res) => {
    const domain = req.body.domain;
    const email = req.body.email;
    const phone = req.body.phone;
    const checkbox = req.body.checkbox;

    // to check if email already exit in the database we need to check it before it get save agina thats why we write this code before .save() command
    // const existingEmail = FriendModel.findOne({ email: email })
    // if (existingEmail) {
    //     console.log(existingEmail)
    //     return res.status(400).json({ message: 'email already register' })
    // }
    const existingEmail = await FriendModel.findOne({ email: email }).exec();
    // email resubmit hone se to ruk gya h but error and alert manage nhi ho paya h aleert mein email alredy exist nhi mila abhi tak
    if (existingEmail) {
        console.log(existingEmail);
        return res.status(400).json({ message: 'Email Already Exist' });

        // res.send('email already use') ish type k response send karne pe form submit to nhi hota but alert mein form submit aata h mtlb for error handling this type of response with status in not good 
        // return;
    }




    const data1 = new FriendModel({ domain: domain, email: email, phone: phone, checkbox: checkbox })

    try {
        await data1.save();
        return res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
})


app.listen(3001, () => {
    console.log('express ReactAxios is connectec')
})