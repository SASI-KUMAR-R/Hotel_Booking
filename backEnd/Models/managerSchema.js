const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
  email: String,
  password: String
});

module.exports = mongoose.models.Manager || mongoose.model('Manager', managerSchema);
