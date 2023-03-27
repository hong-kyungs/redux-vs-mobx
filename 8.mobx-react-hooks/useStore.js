import React from 'react';
import { storeContext } from './Context';
import { userStore, postStore } from './store';

function useStore() {
	const store = React.useContext(storeContext);
	return { userStore, postStore };
}

export default useStore;
