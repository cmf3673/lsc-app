import { GET_CLASSES, ADD_CLASS, DELETE_CLASS, UPDATE_CLASS } from "./NotesTypes";

const initialState = {
  notes: []
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLASSES:
      return {
        ...state,
        notes: action.payload // assign to notes in store
        };
    case ADD_CLASS:
      return {
        ...state,
        notes: [...state.notes, action.payload] // append new note to list
        };
    case DELETE_CLASS:
        return {
          ...state,
          notes: state.notes.filter((item, index) => item.id !== action.payload) // set notes to list without deleted note
        };
    case UPDATE_CLASS:
        const updatedNotes = state.notes.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload }; // assign payload to specific note to update
          }
          return item;
        });
        return {
          ...state,
          notes: updatedNotes // returns updated notes (created with map method to update)
        };
      default:
        return state;
  }
};