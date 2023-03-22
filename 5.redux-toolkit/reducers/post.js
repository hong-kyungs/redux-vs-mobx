const { createSlice } = require('@reduxjs/toolkit');
const { addPost } = require('../actions/post');

const initialState = {
	data: [],
};

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		clearPost(state, action) {
			state.data = [];
		},
	},
	extraReducers: {
		[addPost.pending](state, action) {},
		[addPost.fulfilled](state, action) {
			state.data.push(action.payload);
		},
		[addPost.rejected](state, action) {},
	},
});

module.exports = postSlice;
