import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from './actions/post';
import { logIn } from './actions/user';
import  userSlice from './reducers/user';

const App = () =>{
  const user = useSelector((state) => state.user); //state는 store의 initialState라고 생각하면 된다
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const onClick = useCallback(() => {
    dispatch(logIn({ // 실제로 이 부분은 input에서 연결되어야 한다
      id: 'AmyCho',
      password: '비밀번호',
    }))
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userSlice.actions.logOut())
  }, []);

  const onAddPost = useCallback(() => {
    dispatch(addPost());
  }, [])

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])
  
  const onChanagePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  //
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(userSlice.actions.setLoginFrom({
      email,
      password,
    }))
  }, [dispatch, email, password])
  

  return(
    <div>
      {
      user.isLoggingIn // isLoggingIn이 true면 
      ? <div>로그인중...</div>
      : user.data // isLoggingIn이 false고, user.data가 있으면 
      ? <div>{user.data.nickname}</div> 
      : '로그인해주세요.' //isLoggingIn이 false고, user.data가 있으면
      }
      {!user.data && <button onClick={onClick}>로그인</button>}
      {user.data && <button onClick={onLogout}>로그아웃</button>}
      <button onClick={onAddPost}>게시글 작성</button>

      {/* form예제처럼 input에서는 redux를 사용하지 않고 input에 state를 썼다가 한번에 모아서 form에서 redux로 내보내는 것이 좋다.*/}
      <form onSubmit={onSubmit}>
        <input type="email" value={email} onChange={onChangeEmail}/>
        <input type="password" value={password} onChange={onChanagePassword}/>
      </form>
    </div>
  )
};
  
export default App;