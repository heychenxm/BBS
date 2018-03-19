import React, {Component} from 'react';
import {
  Link
} from 'react-router';

class App extends Component {
  render() {
    console.log('App:',this);
    return (
      <div>
        <ul>
          <li><a href="#/home">首页</a></li>
          <li><a href="#/about">关于</a></li>
        </ul>
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/about">关于</Link></li>
        </ul>

        <div>
          {/* 显示子内容 */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
