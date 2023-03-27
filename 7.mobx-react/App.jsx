import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { userStore, postStore} from './store';

@observer
class App extends Component {
  onLogIn = () => {};

  onLogOut = () => {};


  onChangeName = (e) => {
    this.state.name = e.tartget.value;
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
        ? <button onClick={this.onClick}>로그인</button>
        : <button onClick={this.onLogout}>로그아웃</button>
        }d
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