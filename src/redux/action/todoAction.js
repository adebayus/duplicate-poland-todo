import { State } from 'react-native-gesture-handler';
import * as actionTypes from './actionVariable';

export const getAllTodoData = () => {
	return {
		type: actionTypes.GET_DATA,
	};
};
export const changeDone = (value) => {
	console.log(value, 'todoAction');
	const { idTodo, data } = value;
	const duplicateState = [...data];
	const findIndex = duplicateState.findIndex((el) => el.id === idTodo);
	const dataIndex = duplicateState[findIndex];
	const newData = {
		...dataIndex,
		isDone: !dataIndex.isDone,
	};
	duplicateState[findIndex] = newData;

	// console.log({ duplicateState, findIndex, dataIndex }, 'duplistate');

	return {
		type: actionTypes.CHANGE_DONE_STATE,
		payload: duplicateState,
	};
};
export const changeTagShow = (value) => {
	return {
		type: actionTypes.CHANGE_TAG,
		payload: value,
	};
};

export const updatedTodo = (value) => {
	const dupliState = [...value.data];

	const findIndex = dupliState.findIndex(
		(el) => el.id === value.updatedData.id
	);

	dupliState.splice(findIndex, 1, value.updatedData);
	console.log(dupliState, 'todoAction');
	return {
		type: actionTypes.UPDATE_TODO,
		payload: dupliState,
	};
};

export const addTodo = (value) => {
	const dupliState = [...value.data];
	dupliState.push(value.updatedData);
	return {
		type: ADDING_TODO,
		payload: dupliState,
	};
};

// export const addTodo =
