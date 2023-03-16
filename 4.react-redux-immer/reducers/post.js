const initialState = [];

const postReducer = (prevState = initialState, action) => {
	// 새로운 state 만들어주기
	switch (action.type) {
		case 'ADD_POST':
			return [...prevState, action.data];
		default: // 오타가 나는 경우를 대비하여
			return prevState;
	}
};

module.exports = postReducer;
