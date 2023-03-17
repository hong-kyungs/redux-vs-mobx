const { produce } = require('immer');

const initialState = {
	isLoggingIn: false,
	data: null,
};

//immer의 기본형태
//nextState = produce(prevState, (draft) => {})

const userReducer = (prevState = initialState, action) => {
	// 새로운 state 만들어주기
	return produce(prevState, (draft) => {
		switch (action.type) {
			case 'LOG_IN_REQUEST':
				//immer를 사용하면 코드가 훨씬 간결하고 직관적이다.
				draft.data = null;
				draft.isLoggingIn = true;
				break;
			// return {
			// 	...prevState, // 기존 state를 얕은 복사 해주고,
			// 	data: null,
			// 	isLoggingIn: true, // 바꾸고 싶은 것만 넣어주기
			// };
			case 'LOG_IN_SUCCESS':
				draft.data = action.data;
				draft.isLoggingIn = false;
				break;
			case 'LOG_IN_FAILURE':
				draft.data = null;
				draft.isLoggingIn = false;
				break;
			case 'LOG_OUT':
				draft.data = null;
				break;
			default: // 오타가 나는 경우를 대비하여
				break;
		}
	});
};

module.exports = userReducer;
