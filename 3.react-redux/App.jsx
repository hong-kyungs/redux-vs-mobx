import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from './actions/user';

const App = () =>{
  const user = useSelector((state) => state.user.data) //state는 store의 initialState라고 생각하면 된다
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(logIn({ // 실제로 이 부분은 input에서 연결되어야 한다
      id: 'AmyCho',
      password: '비밀번호',
    }))
  }, []);

  return(
    <div>
      {user ? <div>{user.nickname}</div> : '로그인해주세요.' }
      <button onClick={onClick}>로그인</button>
    </div>
  )
};
  
export default App;