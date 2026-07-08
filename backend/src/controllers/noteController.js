const noteService = require("../services/noteService");

const asyncHandler = require("../middleware/asyncHandler");

const getNotes = asyncHandler(async (req, res) => {

    const notes = await noteService.getAllNotes();

    res.status(200).json({
        success: true,
        data: notes
    });

});

const createNote = asyncHandler(async (req, res) => {

    const note = await noteService.createNote(req.body);

    res.status(201).json({
        success: true,
        data: note
    });

});


const updateNote = asyncHandler(async (req, res) => {

    const note = await noteService.updateNote(
        req.params.id,
        req.body
    );

    res.status(200).json({
        success: true,
        data: note
    });

});

const deleteNote = asyncHandler(async (req, res) => {

    await noteService.deleteNote(req.params.id);

    res.status(200).json({
        success: true,
        message: "Note deleted successfully"
    });

});

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};