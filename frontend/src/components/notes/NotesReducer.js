import { GET_NOTES, ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./NotesTypes";

const initialState = {
  notes: []
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload // assign to notes in store
        };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload] // append new note to list
        };
    case DELETE_NOTE:
        return {
          ...state,
          notes: state.notes.filter((item, index) => item.id !== action.payload) // set notes to list without deleted note
        };
    case UPDATE_NOTE:
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