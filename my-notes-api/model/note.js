const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: String
});

module.exports = mongoose.model('Note', NoteSchema);