const mongoose = require('mongoose');

const ThemeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  }
});

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: String,

  themes: [ThemeSchema]
});

module.exports = mongoose.model('Note', NoteSchema);