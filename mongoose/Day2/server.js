const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT||3000 ;
const password = process.env.MONGO_PASSWORD
app.get('/',(req,res)=>{
    res.send("hello Dheeraj")
})

const MONGODB_URL = `mongodb+srv://dheeraj:${password}@atlastesting.1itdz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("mongoose is Connected !!!")
})

// schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    name:String,
    age:Number,
    date:{
        type:String,
        default:Date.now()
    }
})    

// Model
const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
// saving data to our database
    const data = {
        name:"Pandit",
        age:28
    }


const newBlogPost=new BlogPost(data)

newBlogPost.save((error)=>{
if(error){
    console.log('OOPs Something happened');
} else{
    console.log('Data has been saved');
}
})


app.listen(port,()=>{
    console.log("listening on port 3000");
})