const { observable, autorun, runInAction } = require('mobx');

const state = observable({
	compA: 'a',
	compB: 12,
	compC: null,
});

autorun(() => {
	console.log('changed', state.compA);
});

//runInAction으로 action들을 그룹화시켜줄 수 있다.
runInAction(() => {
	state.compA = 'c';
	state.compB = 'c';
	state.compC = 'c';
});
