const { createStore } = require('redux');

const reducer = () => {};
const initialState = {
	compA: 'a',
	compB: 12,
	compC: null,
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
	console.log('changed');
});

console.log('1st', store.getState());

// const changeCompA = {
// 	type: 'CHANGE_COMP_A',
// 	data: 'b'
// }
// const changeCompAtoC = {
// 	type: 'CHANGE_COMP_A_TO_C',
// 	data: 'c'
// }
// const changeCompAtoD = {
// 	type: 'CHANGE_COMP_A_TO_D',
// 	data: 'd'
// }

const changeCompA = (data) => {
	return {
		type: 'CHANGE_COMP_A',
		data,
	};
};

store.dispatch(changeCompA('B'));

console.log('2nd', store.getState());
