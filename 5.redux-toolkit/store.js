const { configureStore } = require('@reduxjs/toolkit');

const reducer = require('./reducers');

const firstMiddleware = (store) => (next) => (action) => {
	console.log('로깅', action); // 기본기능 실행되기전 기능추가
	next(action); // 기본기능
};

const store = configureStore({
	reducer,
	// middleware: [firstMiddleware, ...getDefaultMiddleware()]; // 변경전코드
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(firstMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
});

module.exports = store;
