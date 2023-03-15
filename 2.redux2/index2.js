const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const addPost = require('./actions/post');

const initialState = {
	user: {
		isLogginIn: true,
		data: null,
	},
	posts: [],
	comments: [],
	favorites: [],
	history: [],
	likes: [],
	followers: [],
};

//3단 고차함수 구조
// function firstMiddleware (store) {
// 	return function (next) {
// 		return function (action) {
// 		}
// 	}
// }
const firstMiddleware = (store) => (next) => (action) => {
	console.log('로깅', action); // 기본기능 실행되기전 기능추가
	next(action); // 기본기능
};

const thunkMiddelware = (store) => (next) => (action) => {
	if (typeof action === 'function') {
		// 비동기
		return action(store.dispatch, store.getState); // store.disptch 와 store.getState 2개 인수를 가진 action함수 호출 -> thunk가 함수로 온 action을 실행시켜준다
	}
	return next(action); //동기
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddelware);

const store = createStore(reducer, initialState, enhancer);

console.log('1st', store.getState());

//-------------------- 윗부분은 미리 만들어두어야하고, 밑에부분은 리액트에서 실행하는 부분

store.dispatch(
	logIn({
		id: 1,
		name: 'AmyCho',
		admin: true,
	})
);
console.log('2nd', store.getState());

// store.dispatch(
// 	addPost({
// 		userId: 1,
// 		id: 1,
// 		content: '안녕하세요. 리덕스입니다.',
// 	})
// );
// console.log('3rd', store.getState());

// store.dispatch(
// 	addPost({
// 		userId: 1,
// 		id: 1,
// 		content: '리덕스 두번째 게시물입니다.',
// 	})
// );
// console.log('4th', store.getState());

// store.dispatch(logOut());
// console.log('5th', store.getState());
