const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/FoodDB');

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
app.get('/' , async (req,res) => {
    res.status(200).json('Working')
})
app.post('/saveUserData', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ message: 'User data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
