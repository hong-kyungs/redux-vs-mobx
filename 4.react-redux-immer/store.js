const { createStore, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { composeWithDevTools } = require('redux-devtools-extension');

const initialState = {
	user: {
		isLoggingIn: false, // inLoggingIn은 로그인창 돌아가는 기능같은 것들
		data: null,
	},
	posts: [],
};

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

const enhancer =
	//배포환경에서 devtools를 사용하고 싶지 않다면?
	process.env.NODE_ENV === 'production'
		? //production, 실서비스용이면 compose를 사용하고
		  compose(applyMiddleware(firstMiddleware, thunkMiddelware))
		: //개발환경일때는 composeWithDevTools를 사용
		  composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddelware));

const store = createStore(reducer, initialState, enhancer);

module.exports = store;
