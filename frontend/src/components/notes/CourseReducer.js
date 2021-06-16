import { GET_COURSES, ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from "./CourseTypes";

const initialState = {
  courses: []
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload // assign to notes in store
        };
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload] // append new note to list
        };
    case DELETE_COURSE:
        return {
          ...state,
          courses: state.courses.filter((item, index) => item.id !== action.payload) // set notes to list without deleted note
        };
    case UPDATE_COURSE:
        const updatedCourses = state.courses.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload }; // assign payload to specific note to update
          }
          return item;
        });
        return {
          ...state,
          courses: updatedCourses // returns updated notes (created with map method to update)
        };
      default:
        return state;
  }
};