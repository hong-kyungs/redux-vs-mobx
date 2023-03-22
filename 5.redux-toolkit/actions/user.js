const { createAsyncThunk } = require('@reduxjs/toolkit');

//서버에서 받아오는 것처럼 delay라는 함수를 만들어줌
const delay = (time, value) =>
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(value);
		}, time);
	});

//createAsyncThunk(액션이름, () => {});
const logIn = createAsyncThunk('user/logIn', async (data, thunkAPI) => {
	console.log(data);
	//throw new Error('비밀번호가 틀렸습니다.'); -> 에러 확인하는 법
	const result = await delay(500, {
		userId: 11,
		nickname: 'zerocho',
	});
	return result;
});

module.exports = { logIn };
