const { observable, autorun, reaction, action, runInAction } = require('mobx');

const userState = observable({
	isLoggingIn: false,
	data: null,
});
const postState = observable([]);

//굳이 runInAction으로 묶지 않아도 되지만, 하나의 액션으로 처리하고 싶다면 묶어준다
runInAction(() => {
	//user data를 넣고싶다면,
	userState.data = {
		id: 1,
		nickname: 'zerocho',
	};
	//새로운 글을 쓰고싶다면,
	postState.push({ id: 1, content: '안녕하세요.' });
});
