import React, {Component} from 'react';
import ReactDom  from 'react-dom';
// 引入路由
import {
  Router, // 路由器
  hashHistory,  // 历史管理方式
  Route, // 路线
  IndexRoute, // 索引路线（默认路由）
  IndexRedirect //重定向
} from 'react-router';

// 要使用路由管理页面组件，那么，就得先引入组件
import Home from './Home';
import About from './About';
import App from './App';

class MyRouterDemo extends Component {
  render() {
    const router1 = (
      <Router history={hashHistory}>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
      </Router>
    );


    const router2 = (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
        </Route>
      </Router>
    );

    // 把路线抽离出来
    /*
     *  路径
     *      绝对路径：以“/”开头的路径，直接在服务器的根目录找资源。
     *      相对路径： 不以“/”开头开头的路径，在当前路径下来查找（推荐）
     * */
    const routes1 = (
        <Route path="/app" component={App}>
          <Route path="home" component={Home}/>
          <Route path="about" component={About}/>
        </Route>
    );


    const routes2 = (
      <Route path="/app" component={App}>
        {/*
            当我们进入父路线时，子路线默认是不显示的
            加上IndexRoute索引路线以后，第一次打开时，就会自动打开配置的页面组件
            IndexRoute索引路线和地址为“/”的路线是一个效果（可以称之为简写）
            <IndexRoute component={Home}/> 等价于 <Route path="/" component={Home}/>
        */}

        {/* 进入页面，自动引导到Home组件（隐式引导，地址不会变）  */}
        <IndexRoute component={Home}/>
        {/*<Route path="/" component={Home}/>*/}
        {/*<Route path="home" component={Home}/>*/}
        <Route path="about" component={About}/>
      </Route>
    );


    const routes3 = (
      <Route path="/" component={App}>
        {/* 重定向：进入页面，自动引导（显示引导，地址会变）  */}
        <IndexRedirect to="/about"/>
        <Route path="home" component={Home}/>
        <Route path="about" component={About}/>
      </Route>
    );

    return <Router history={hashHistory} routes={routes3}/>;
  }
}

MyRouterDemo.propTypes = {};
MyRouterDemo.defaultProps = {};

export default MyRouterDemo;

ReactDom.render(
  <MyRouterDemo/>,
  document.querySelector('#app')
);
/*
 *  React路由使用：
 *      1、 安装路由（v.2.6.1）
 *      2、 引入路由模块
 *          a、 路由器
 *          b、 （hash）历史
 *          c、 路线
 *              Route 路由对象
                  path 路径
                  component 显示的组件
 *
 *      3、 把路由器当成渲染的根模块，进行页面展示
 *
 *  嵌套路由：
 *     形式：
 *        1、 可以在Route路线中，再嵌套子路线（显示根路线时，子路线默认隐藏）
 *        2、 更改hash地址时，会把地址匹配的子路线组件，自动更新到根组件的this.props.children属性上，并且会自动触发更新（）
 *
 *      使用 ：
 *        1、定义一个父路线
 *        2、在父路线下，定义多个子路线
 *        3、在父路线中，显示动态数据位置，使用表达式：{this.props.children}
 *
 *
 *   缺省（引导）路由
 *      IndexRoute ： 针对“/”路线，自动找配置组件
 *      IndexRedirect： 针对“/”路线，自动触发地址跳转
 *
 * */
