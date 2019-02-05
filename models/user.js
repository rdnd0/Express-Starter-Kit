const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  occupation: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
