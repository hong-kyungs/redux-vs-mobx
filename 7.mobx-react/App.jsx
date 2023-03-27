import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { userStore, postStore} from './store';

@observer
class App extends Component {
  //global store를 쓰지않고 컴포넌트안에서만 state를 쓰고싶다면,
  state = observable({
    name: '',
    password: '',
  }) 

  onLogIn = () => {
    userStore.logIn({
      nickname: '제로초',
      password: '비밀번호',
    });
  };

  onLogOut = () => {
    userStore.logOut();
  };


  onChangeName = (e) => {
    this.state.name = e.target.value;
  }

  onChangePassword = (e) => {
    this.state.password = e.target.value;
  }

  render() {
    return(
      <div>
        {userStore.isLoggingIn
        ? <div>로그인 중...</div>
        : userStore.data
          ? <div>{userStore.data.nickname}</div>
          : '로그인 해주세요.'}
        {!userStore.data 
        ? <button onClick={this.onLogIn}>로그인</button>
        : <button onClick={this.onLogOut}>로그아웃</button>
        }
        <div>{postStore.data.length}</div>
        <div>
          <input value={this.state.name} onChange={this.onChangeName}/>
          <input value={this.state.password} type="password" onChange={this.onChangePassword}/>
        </div>
      </div>
    )
  }
}

export default App;
