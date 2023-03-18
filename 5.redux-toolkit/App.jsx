import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from './actions/user';

const App = () =>{
  const user = useSelector((state) => state.user) //state는 store의 initialState라고 생각하면 된다
  const dispatch = useDispatch();

  
  const onClick = useCallback(() => {
    dispatch(logIn({ // 실제로 이 부분은 input에서 연결되어야 한다
      id: 'AmyCho',
      password: '비밀번호',
    }))
  }, []);

  const onLogout = useCallback(() => {
    dispatch(logOut())
  }, []);
  

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
    </div>
  )
};
  
export default App;