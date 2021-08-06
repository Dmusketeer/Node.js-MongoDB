const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MyWaysLerners');

const Learnersfav = new mongoose.Schema({
    fName: String,
});
const Learners = new mongoose.Schema({
    Name:String,
    Age:Number,
    Batch:String,
    College:String,
    Graduated:Boolean,
    favFruits: Learnersfav
});


const learnersDetails = new mongoose.model('Details',Learners);
const learnersfavf = new mongoose.model('userFavFruits',Learnersfav);
const learner_1_fav = new learnersfavf({

    fName:"apple" 
});
learner_1_fav.save();
const learner_1=new learnersDetails({

    Name: "raj verma",
    Age: 27,
    Batch: 'B5',
    College: "KEC",
    Graduated: true,
    favFruits: learner_1_fav
    
});

learner_1.save();


// const learner_2 = new learnersDetails({

//     Name: "Prakhar",
//     Age: 28,
//     Batch: 'B2',
//     College: "KEC",
//     Graduated: true
// });
// const learner_3 = new learnersDetails({

//     Name: "Rahul",
//     Age: 27,
//     Batch: 'B3',
//     College: "Buddha",
//     Graduated: false
// });

// learner_data.save();
// learnersDetails.insertMany([learner_1, learner_2, learner_3]);


// // retrieve operations:
// learnersDetails.find((err,data)=>{
// //     // err?console.log(err):console.log(data) ;
// //     // err ? console.log(err) : console.log(data[1].Name) ;
//     console.log("=======================================")
//     err ? console.log(err) : console.log(data.forEach((da)=>{
//         console.log(da.Name)
//     })) ;
// })

// // delete an Information form db:
// learnersDetails.deleteOne({Name:"Rahul"},(err)=>{
//     err ? console.log(err) : console.log("Deleted !") ;
// });


// // updating the records in database
// learnersDetails.updateOne({_id:"610bbc26f60ef53388cf3ae0"},{Name:"Bholu Tiwari"},(err)=>{
//     err?console.log(err):console.log("Updated!!");
// });