import React, { useCallback } from 'react';
import { useLocalStore, useObserver } from 'mobx-react';
import { userStore, postStore} from './store';
// import useStore from './useStore';

const App = () => {
  //context API로 묶어줄 떄
  // const { userStore, postStore } = useStore();

  const state = useLocalStore(() => ({
    name: '',
    password: '',
    onChangeName(e) {
      this.name = e.target.value;
    },
    onChangePassword(e) {
      this.password = e.target.value;
    }
  }))

  const onLogIn = useCallback(() => {
    userStore.logIn({
      nickname: '제로초',
      password: '비밀번호',
    });
  }, []);

  const onLogOut = useCallback(() => {
    userStore.logOut();
  }, []);


  return useObserver(() => (
    <div>
        {userStore.isLoggingIn
        ? <div>로그인 중...</div>
        : userStore.data
          ? <div>{userStore.data.nickname}</div>
          : '로그인 해주세요.'}
        {!userStore.data 
        ? <button onClick={onLogIn}>로그인</button>
        : <button onClick={onLogOut}>로그아웃</button>
        }
        <div>{postStore.data.length}</div>
        <div>
          <input value={state.name} onChange={state.onChangeName}/>
          <input value={state.password} type="password" onChange={state.onChangePassword}/>
        </div>
      </div>
  ))
}

export default App;
