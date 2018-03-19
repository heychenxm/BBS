import React, {Component} from 'react';

import '../assets/styles/homePage.less';

import {
  Container,
} from 'amazeui-touch';

import HeaderBar from '../components/HeaderBar';

class HomePage extends Component {
  render() {


    return (
      <Container fill={true}>
        <HeaderBar title='服务'/>
      </Container>
    );
  }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

export default HomePage;


/*
* 妹子UI组件使用步骤：
*   1、 引入
*   2、 在render中使用
* */
