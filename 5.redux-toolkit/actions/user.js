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
	const result = await delay(500, {
		userId: 11,
		nickname: 'zerocho',
	});
	return result;
});

const logIn = (data) => {
	// async action creator(비동기 액션)
	return (dispatch, getState) => {
		// async action
		dispatch(logInRequest(data));
		try {
			//setTimeout을 나중에는 axios.post().then().catch()로 대체
			// 성공하면
			setTimeout(() => {
				dispatch(
					logInSuccess({
						userID: 1,
						nickname: 'zeroCho',
					})
				);
			}, 2000);
		} catch (e) {
			// 실패하면
			dispatch(logInFailure(e));
		}
	};
};
//보통 request, success, failure 3가지를 세트로 구성함.
const logInRequest = (data) => {
	return {
		type: 'LOG_IN_REQUEST',
		data,
	};
};

const logInSuccess = (data) => {
	return {
		type: 'LOG_IN_SUCCESS',
		data,
	};
};

const logInFailure = (error) => {
	return {
		type: 'LOG_IN_FAILURE',
		error,
	};
};

module.exports = { logIn };
