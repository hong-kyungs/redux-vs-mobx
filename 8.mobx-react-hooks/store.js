const { observable } = require('mobx');

const userStore = observable({
	isLoggingIn: false,
	data: null,
	logIn(data) {
		this.isLoggingIn = true;
		setTimeout(() => {
			this.data = data;
			this.isLoggingIn = false;
			//userStore에 딸려있는 logIn 액션이 postStore도 바꿀 수 있다.
			postStore.data.push(1); // redux에 비해서 편한 점
		}, 2000);
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
});

export { userStore, postStore };
