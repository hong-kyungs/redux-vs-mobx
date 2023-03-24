const { observable, autorun, reaction, action, runInAction } = require('mobx');

//observable로 state를 감싼다
const state = observable({
	compA: 'a',
	compB: 12,
	compC: null,
});

//state가 바뀔때마다 바꼈다고 감지해주는 역할
autorun(() => {
	console.log('changed', state.compA);
});

//autorun과 같은 감지기
reaction(
	() => {
		//첫번째 함수에는 감지하기를 원하는 값
		return state.compB;
	},
	() => {
		//첫번째 함수에서 선택한 값이 바뀔때, 두번째 함수가 실행된다
		console.log('reaction', state.compB);
	}
);

//runInAction으로 action들을 그룹화시켜줄 수 있다. 바로 실행
runInAction(() => {
	state.compA = 'b';
	state.compB = 25;
	state.compC = 'b';
});

runInAction(() => {
	state.compA = 'c';
});

//runInAction은 바로 실행된다면, action으로 함수로 만들어놨다가 필요할 때 사용할 수 있다.
const change = action(() => {
	state.compA = 'd';
});
change();
