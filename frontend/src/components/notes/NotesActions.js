import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_CLASSES, ADD_CLASS, DELETE_CLASS, UPDATE_CLASS } from "./NotesTypes";

export const getNotes = () => dispatch => {
  axios
    .get("/api/v1/notes/")
    .then(response => {
      dispatch({
        type: GET_CLASSES,
        payload: response.data //
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addNote = note => dispatch => {
  axios
    .post("/api/v1/notes/", note)
    .then(response => {
      dispatch({
        type: ADD_CLASS,
        payload: response.data // Sending 
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const deleteClass = id => dispatch => {
    axios
      .delete(`/api/v1/notes/${id}/`)
      .then(response => {
        dispatch({
          type: DELETE_CLASS,
          payload: id // just sending id so know which to delete
        });
      })
      .catch(error => {
        toastOnError(error);
      });
  };
  
  export const updateClass = (id, note) => dispatch => { //getting id for note to chnage and new note
    axios
      .patch(`/api/v1/notes/${id}/`, note)
      .then(response => {
        dispatch({
          type: UPDATE_CLASS,
          payload: response.data
        });
      })
      .catch(error => {
        toastOnError(error);
      });
  };