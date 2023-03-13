const reducer = (prevState, action) => {
	// 새로운 state 만들어주기
	switch (action.type) {
		case 'LOG_IN':
			return {
				...prevState, // 기존 state를 얕은 복사 해주고,
				user: action.data, // 바꾸고 싶은 것만 넣어주기
			};
		case 'LOG_OUT':
			return {
				...prevState,
				user: null,
			};
			d;
		case 'ADD_POST':
			return {
				...prevState,
				posts: [...prevState.posts, action.data],
			};
		default: // 오타가 나는 경우를 대비하여
			return prevState;
	}
};

module.exports = reducer;
