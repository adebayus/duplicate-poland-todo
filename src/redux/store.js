import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducer/todoReducer';

export default stores = () => {
	const create_store = createStore(todoReducer, applyMiddleware(thunk));
	// console.log(create_store, 'store.js');
	return create_store;
};
