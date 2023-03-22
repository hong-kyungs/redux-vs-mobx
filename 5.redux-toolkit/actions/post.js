const { createAsyncThunk } = require('@reduxjs/toolkit');

//서버에서 받아오는 것처럼 delay라는 함수를 만들어줌
const delay = (time, value) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(value);
		}, time);
	});

const addPost = createAsyncThunk('post/add', async () => {
	return await delay(500, {
		title: '새 게시글',
		content: '내용~~~~~~~~~~',
	});
});

module.exports = { addPost };
