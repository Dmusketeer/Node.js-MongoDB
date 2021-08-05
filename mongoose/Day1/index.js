const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MyWaysLerners');
const Learners = new mongoose.Schema({
    Name:String,
    Age:Number,
    Batch:String,
    College:String,
    Graduated:Boolean    
});

const learnersDetails = new mongoose.model('Details',Learners);
const learner_1=new learnersDetails({

    Name: "Dheeraj Tiwari",
    Age: 26,
    Batch: 'B2',
    College: "MMMUT",
    Graduated: true
});

const learner_2 = new learnersDetails({

    Name: "Prakhar",
    Age: 28,
    Batch: 'B2',
    College: "KEC",
    Graduated: true
});
const learner_3 = new learnersDetails({

    Name: "Rahul",
    Age: 27,
    Batch: 'B3',
    College: "Buddha",
    Graduated: false
});

// learner_data.save();
learnersDetails.insertMany([learner_1, learner_2, learner_3]);
