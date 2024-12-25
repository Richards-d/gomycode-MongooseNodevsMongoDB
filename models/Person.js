const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String], // Tableau de chaînes
});

module.exports = mongoose.model('Person', personSchema);
