import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {actionCreators} from './store';
import {Redirect} from 'react-router-dom';

class Login extends PureComponent{
  render(){
    const {loginStatus} = this.props;
    if(!loginStatus){
      return(
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => {this.account = input}}></Input>
            <Input placeholder="密码" type='password' ref={(input) => {this.password = input}}></Input>
            <Button onClick={() =>this.props.login(this.account,this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      ) 
    }else{
      return <Redirect to='/'></Redirect>
    }
    
  }

}

const mapState = (state) => ({
  loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
  login(accountElement,passwordElement){
    dispatch(actionCreators.login(accountElement.value,passwordElement.value));
  }
})
export default connect(mapState,mapDispatch)(Login);