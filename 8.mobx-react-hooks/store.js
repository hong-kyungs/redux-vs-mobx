const { observable, action } = require('mobx');

const userStore = observable({
	isLoggingIn: false,
	data: null,
	logIn(data) {
		this.isLoggingIn = true;
		setTimeout(
			action(() => {
				this.data = data;
				this.isLoggingIn = false;
				//userStore에 딸려있는 logIn 액션이 postStore도 바꿀 수 있다.
				postStore.data.push(1); // redux에 비해서 편한 점
			}),
			2000
		);
	},
	logOut() {
		this.data = null;
	},
});

const postStore = observable({
	data: [],
	addPost(data) {
		this.data.push(data);
	},
	//getter는 mobx에서 computed의 역할을 한다. computed는 mobx에서 제공하는 caching
	//리렌더링의 영향을 받지 않고, 저장되어있는 값을 그대로 가져온다.
	get postLength() {
		return this.data.length;
	},
});

export { userStore, postStore };
