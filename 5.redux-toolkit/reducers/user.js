const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	isLoggingIn: false,
	data: null,
};

const userReducer = (prevState = initialState, action) => {
	// 새로운 state 만들어주기
	switch (action.type) {
		case 'LOG_IN_REQUEST':
			return {
				...prevState, // 기존 state를 얕은 복사 해주고,
				data: null,
				isLoggingIn: true, // 바꾸고 싶은 것만 넣어주기
			};
		case 'LOG_IN_SUCCESS':
			return {
				...prevState,
				data: action.data,
				isLoggingIn: false,
			};
		case 'LOG_IN_FAILURE':
			return {
				...prevState,
				data: null,
				isLoggingIn: false,
			};
		case 'LOG_OUT':
			return {
				...prevState,
				data: null,
			};
		default: // 오타가 나는 경우를 대비하여
			return prevState;
	}
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		//동기적, 내부적
		logOut(state, action) {
			state.data = null;
		},
	},
	extraReducers: {
		//비동기적, 외부적
	},
});

module.exports = userSlice;
