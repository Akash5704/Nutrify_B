const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  onboardingCompleted: Boolean,
  gender: String,
  workoutsPerWeek: String,
  PreviousAppUsed : String,
  height: String,
  weight: String,
  dob: String,
  feet:Number,
  inches:Number,
  weight:Number,
  month : String,
  day : String,
  year : String,
  Goal : String,
  TargetWeight: Number,
  WeightSpeed : String,
  obstacles : Array,
  DietType : String
});

const User = mongoose.model('User', userSchema);