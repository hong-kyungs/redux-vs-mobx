import { createStore } from 'redux';

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

const initialState = {
	user: null,
	posts: [],
	posts: [],
	comments: [],
	favorites: [],
	history: [],
	likes: [],
	followers: [],
};

const store = createStore(reducer, initialState);
//화면은 어떻게 바꿔주는가? 사실 쓸 필요없이 화면은 알아서 바뀐다.
store.subscribe(() => {
	// subscribe가 react-rudex안에 들어있다.
	console.log('changed'); // 화면 바꿔주는 코드 여기서..
});

console.log('1st', store.getState());

const logIn = (data) => {
	return {
		type: 'LOG_IN',
		data,
	};
};
const logOut = () => {
	return {
		type: 'LOG_OUT',
	};
};

const addPost = (data) => {
	return {
		type: 'ADD_POST',
		data,
	};
};

//-------------------- 윗부분은 미리 만들어두어야하고, 밑에부분은 리액트에서 실행하는 부분

store.dispatch(
	logIn({
		id: 1,
		name: 'AmyCho',
		admin: true,
	})
);
console.log('2nd', store.getState());

store.dispatch(
	addPost({
		userId: 1,
		id: 1,
		content: '안녕하세요. 리덕스입니다.',
	})
);
console.log('3rd', store.getState());

store.dispatch(
	addPost({
		userId: 1,
		id: 1,
		content: '리덕스 두번째 게시물입니다.',
	})
);
console.log('4th', store.getState());

store.dispatch(logOut());
console.log('5th', store.getState());
