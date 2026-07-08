const Note = require("../models/noteModel");

const createNote = async (data) => {
  return await Note.create(data);
};

const getAllNotes = async () => {
  return await Note.find().sort({ createdAt: -1 });
};

const updateNote = async (id, data) => {
  return await Note.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteNote = async (id) => {
  return await Note.findByIdAndDelete(id);
};

const ApiError = require("../utils/ApiError");

const getNoteById = async (id) => {

    const note = await Note.findById(id);

    if (!note) {
        throw new ApiError(404, "Note not found");
    }

    return note;
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
};