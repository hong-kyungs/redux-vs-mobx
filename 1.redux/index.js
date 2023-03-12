const { createStore } = require('redux');

const reducer = (prevState, action) => {
	// 새로운 state 만들어주기
	switch (action.type) {
		case 'CHANGE_COMP_A':
			return {
				...prevState, // 기존 state를 얕은 복사 해주고,
				compA: action.data, // 바꾸고 싶은 것만 넣어주기
			};
		case 'CHANGE_COMP_B':
			return {
				...prevState,
				compB: action.data,
			};
			d;
		case 'CHANGE_COMP_C':
			return {
				...prevState,
				compC: action.data,
			};
		default: // 오타가 나는 경우를 대비하여
			return prevState;
	}
};

const initialState = {
	compA: 'a',
	compB: 12,
	compC: null,
};

const store = createStore(reducer, initialState);
//화면은 어떻게 바꿔주는가? 사실 쓸 필요없이 화면은 알아서 바뀐다.
store.subscribe(() => {
	// subscribe가 react-rudex안에 들어있다.
	console.log('changed'); // 화면 바꿔주는 코드 여기서..
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
