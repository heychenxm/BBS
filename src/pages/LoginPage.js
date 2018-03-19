// 1. 引入
import React, {Component} from 'react';
import axios from 'axios';

// 引入样式
import '../assets/styles/loginPage.less';

// 引入JS组件
import {
  Container,
  Notification
} from 'amazeui-touch';
import SmartFormInput from '../components/SmartFormInput';
import SmartButton from '../components/SmartButton2';

// 引入图片资源
import logoImg from '../assets/images/logo.jpg';

// 2. 声明组件类
class LoginPage extends Component {

  constructor(){//（做的都是准备工作）
    // 只要有继承，那么必须先实例化父
    super();
    // 修改所有方法的this指向
    // this.doLogin = this.doLogin.bind(this);
    // 状态的初始化
    this.state = {
      visible : false
    };
  }

  // 登录
  doLogin(){
    // console.log('login:',this.refs.username.getValue());
    // 1. 获取表单项
    var usernameEl = this.refs.username;
    var passwordEl = this.refs.password;
    // 2. 取值
    var username = usernameEl.getValue();
    var password = passwordEl.getValue();

    // 3. 把值作为参数，发送AJAX请求
    axios.get('/server/success.json', {
      'username': username,
      'password': password
    })
    .then(function (response) { // 请求的回调
      console.log('response:',response);
      var data = response.data;
      if(data.success){ // 请求成功
        alert(data.message);
      }else{// 请求失败
        // alert(data.message);
        this.setState({
            visible: true
        });
      }
    }.bind(this))
    .catch(function (error) {
      console.log('error:',error);
    });

    // 4. 根据请求的反馈（回调）,来对消息的结果进行展示
  }

  closeNotification() {

    this.setState({
      visible: false
    });
  }

  render() {
    return (
      // 页面容器
      <Container fill={true} className='login-contrainer'>
        {/* 错误提示框 */}
        <Notification
          title="温馨提示"
          amStyle='alert'
          visible={this.state.visible}
          animated
          onDismiss={()=>this.closeNotification()}
        >
          登录失败！！
        </Notification>


        {/*登录logo*/}
        <section className='login-logo'>
          <img className='logo-img' src={logoImg} alt='登录logo'/>
          <p className='logo-text'>智天下</p>

        </section>
        {/*登录表单*/}
        <section className='login-form'>
            <SmartFormInput iconName='mobile' ref='username'/>
            <SmartFormInput iconName='lock' type='password' ref='password'/>
            {/* 箭头函数在执行时，会保持this指向定义时的环境 */}
            <SmartButton block value='登录' onClick={()=>{this.doLogin()}}/>
            <p className='forgetPsw'>忘记密码?</p>
            <SmartButton value='免费注册'/>&emsp;<SmartButton value='游客登录'/>
        </section>

      </Container>
    );
  }
}

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

// 导出
export default LoginPage;
