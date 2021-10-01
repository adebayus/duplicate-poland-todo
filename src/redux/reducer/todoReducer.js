import * as actionTypes from '../action/actionVariable';
const data = [
	{
		id: 1,
		title: 'a',
		isDone: true,
		tags: 1,
		detail: 'sadasdb',
	},
	{
		id: 2,
		title: 'b',
		isDone: true,
		tags: 1,
		detail: 'doing something dude',
	},
	{
		id: 3,
		title: 'c',
		isDone: true,
		tags: 2,
		detail: 'doing something dude',
	},
	{
		id: 4,
		title: 'd',
		isDone: true,
		tags: 2,
		detail: 'doing something dude',
	},
	{
		id: 5,
		title: 'e',
		isDone: true,
		tags: 3,
		detail: 'doing something dude',
	},
	{
		id: 6,
		title: 'f',
		isDone: true,
		tags: 4,
		detail: 'doing something dude',
	},
	{
		id: 7,
		title: 'g',
		isDone: true,
		tags: 4,
		detail: 'doing something dude',
	},
	{
		id: 8,
		title: 'at',
		isDone: true,
		tags: 4,
		detail: 'doing something dude',
	},
	{
		id: 9,
		title: 'attemp',
		isDone: true,
		tags: 4,
		detail: 'doing something dude',
	},
];
const initialState = {
	data: [...data],
	showTag: 0,
};

export default todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_DATA:
			return state;
		case actionTypes.CHANGE_DONE_STATE:
			return { ...state, data: action.payload };
		case actionTypes.CHANGE_TAG:
			return {
				...state,
				showTag: action.payload,
			};
		case actionTypes.UPDATE_TODO:
			return {
				...state,
				data: action.payload,
			};
		case actionTypes.ADDING_TODO:
			console.log(action.payload, 'payload');
			return {
				...state,
				data: action.payload,
			};
		default:
			// console.log(state, 'todoREducer');
			return state;
	}
};
