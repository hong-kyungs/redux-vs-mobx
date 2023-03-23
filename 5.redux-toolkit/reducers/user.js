const { createSlice } = require('@reduxjs/toolkit');
const { logIn } = require('../actions/user');

const initialState = {
	isLoggingIn: false,
	data: null,
	email: '',
	password: '',
	prices: Array(100)
		.fill()
		.map((v, i) => (i + 1) * 100),
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		//동기적, 내부적
		logOut(state, action) {
			state.data = null;
		},
		setEmail(state, action) {
			state.email = action.payload;
		},
		setPassword(state, action) {
			state.password = action.payload;
		},
	},
	extraReducers: {
		//비동기적, 외부적
		[logIn.pending](state, action) {
			//logIn을 actions에서 받아와서 action이름이 user/logIn/pending
			state.isLoggingIn = true;
		},
		[logIn.fulfilled](state, action) {
			//action에 있는 data = action.payload
			//action이름이 user/logIn/fulfilled
			state.data = action.payload;
			state.isLoggingIn = false;
		},
		[logIn.rejected](state, action) {
			//action이름이 user/logIn/rejected
			state.data = null;
			state.isLoggingIn = false;
		},
	},
});

module.exports = userSlice;
