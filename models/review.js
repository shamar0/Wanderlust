const mongoose = require("mongoose");
const {Schema} = mongoose;
const User = require("./user.js");



const reviewSchema = Schema({
    rating:Number,
    comment:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
    
})
const Review = mongoose.model("Review",reviewSchema);
const addReview = async(req,res)=>{
    let newReview = new Review ({rating:5, comment:"nice one", author:"65ebfe59b5aa2d2fadfc0592"});
    let result = await newReview.save();
    console.log(result);
}
// addReview();
module.exports = Review;