const mongoose = require("mongoose");

//creating a schema
const notesSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

//creating a model from schema
const Note = mongoose.model("Note", notesSchema);

module.exports = Note;
