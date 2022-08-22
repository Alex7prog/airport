import * as searchGateway from './searchGateway';
import { searchListSelector } from './search.selectors';

export const SEARCH_LIST_RECIEVED = 'SEARCH_LIST_RECIEVED';

// action
export const searchListRecieved = (searchList) => {
  const action = {
    type: SEARCH_LIST_RECIEVED,
    payload: {
      searchList,
    },
  };

  return action;
};

// async action
export const getSearchList = (date) => {
  const thunkAction = function (dispatch) {
    searchGateway.fetchSearchList(date).then((searchList) => {
      dispatch(searchListRecieved(searchList));
    });
  };
  return thunkAction;
};

// // async action
// export const updateTask = (taskId) => {
//   const thunkAction = function (dispatch, getState) {
//     const state = getState();
//     const tasksList = tasksListSelector(state);
//     const task = tasksList.find((task) => task.id === taskId);

//     const updatedTask = {
//       ...task,
//       done: !task.done,
//     };

//     tasksGateway.updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
//   };
//   return thunkAction;
// };

// export const deleteTask = (taskId) => {
//   const thunkAction = function (dispatch) {
//     tasksGateway.deleteTask(taskId).then(() => dispatch(getTasksList()));
//   };
//   return thunkAction;
// };

// export const createTask = (text) => {
//   const thunkAction = function (dispatch) {
//     const newTask = {
//       text,
//       done: false,
//       createDate: new Date().toISOString(),
//     };
//     tasksGateway.createTask(newTask).then(() => dispatch(getTasksList()));
//   };
//   return thunkAction;
// };
