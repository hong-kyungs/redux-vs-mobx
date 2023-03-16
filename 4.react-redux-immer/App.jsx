import React from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from './actions/user';

class App extends React.Component {
  onClick = () => {
    this.props.dispatchLogIn({ // 실제로 이 부분은 input에서 연결되어야 한다
      id: 'AmyCho',
      password: '비밀번호',
    })
  }

  onLogout = () => {
    this.props.dispatchLogOut(logOut());
  }


  render() {
    const { user } = this.props;
    return(
      <div>
        {
        user.isLoggingIn // isLoggingIn이 true면 
        ? <div>로그인중...</div>
        : user.data // isLoggingIn이 false고, user.data가 있으면 
        ? <div>{user.data.nickname}</div> 
        : '로그인해주세요.' //isLoggingIn이 false고, user.data가 있으면
        }
        {!user.data && <button onClick={this.onClick}>로그인</button>}
        {user.data && <button onClick={this.onLogout}>로그아웃</button>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
}); // class방식은 reselect를 써야 하는 경우가 있다.

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn : (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(App);