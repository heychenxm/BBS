/*
 * 项目的主JS文件
 * */
// 引入样式
import './assets/styles/app.less';

import React from 'react';
import {
  render
} from 'react-dom';
import {
  Router,
  hashHistory,
  Route,
  Link,
  IndexRoute
} from 'react-router';
/*
*   var az = require（'amazeui-touch'）;
*   var Button = az.Button;
* */
import {
  Container,
  TabBar
} from 'amazeui-touch'; // 结构



// console.log(HomePage);


class App extends React.Component{
  render(){
    // 从上下文中，获取指定router对象
    const router = this.context.router;

    return (
      <Container direction='column'>
        {/* 页面正文部分（从外部引入） */}
        <Container
          transition='fade'
        >
          {this.props.children}
        </Container>

        {/* 页面导航 */}
        <TabBar
          amStyle="secondary"
        >
          <TabBar.Item
            //
            // *工具栏的内部配置*
            //
            // 容器对应的组件
            component={Link}
            // 图标名称
            icon="list"
            // 子项标题
            title="购物"
            // 子项是否被选中
            selected={router.isActive('/app/home', true)}

            //
            // *Link组件配置*
            //
            to="/app/home"
            onlyActiveOnIndex
          />
          <TabBar.Item
            component={Link}
            icon="info"
            title="服务"
            badge="404"
            // @see https://github.com/reactjs/react-router/blob/0616f6e14337f68d3ce9f758aa73f83a255d6db3/docs/API.md#isactivepathorloc-indexonly
            selected={router.isActive('/app/service', true)}

            to="/app/service"
            onlyActiveOnIndex
          />
        </TabBar>

      </Container>
    );
  }
}
// 定义上下文参数需求（按需加载）
App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

// 引入页面组件
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';

// 配置路由
const routes = (
    <Route path='/app' component={App}>
      <IndexRoute component={HomePage}/>
      <Route path='home' component={HomePage}/>
      <Route path='service' component={ServicePage}/>
    </Route>
);

render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'));
/*
* 集成路由：
*     1. 找到妹子UI官方提供的示例，跑起来，查看源码
*     2. 分析app页面的大结构
*         1)  外层：整个页面有一个大容器（父路线）
*             采用了垂直方向的flexbox布局
*         2） 里层1：页面变化部分（子路线）
*             a、顶栏
*             b、内容
*             * 使用this.props.children显示
*
*         3） 里层2：底部导航部分（子路线）
*
*      3. 引入路由模块
*
*      4. 使用路由模块定义路由结构
*
*      5. 在生个页面，统一使用路由器组件来渲染页面
*
* */
