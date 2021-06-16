import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_COURSES, ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from "./NotesTypes";

export const getCourses = () => dispatch => {
  axios
    .get("/api/v1/notes/")
    .then(response => {
      dispatch({
        type: GET_COURSES,
        payload: response.data //
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addCourse = note => dispatch => {
  axios
    .post("/api/v1/notes/", note)
    .then(response => {
      dispatch({
        type: ADD_COURSE,
        payload: response.data // Sending 
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const deleteCourse = id => dispatch => {
    axios
      .delete(`/api/v1/notes/${id}/`)
      .then(response => {
        dispatch({
          type: DELETE_COURSE,
          payload: id // just sending id so know which to delete
        });
      })
      .catch(error => {
        toastOnError(error);
      });
  };
  
  export const updateCourse = (id, note) => dispatch => { //getting id for note to change and new note
    axios
      .patch(`/api/v1/notes/${id}/`, note)
      .then(response => {
        dispatch({
          type: UPDATE_COURSE,
          payload: response.data
        });
      })
      .catch(error => {
        toastOnError(error);
      });
  };