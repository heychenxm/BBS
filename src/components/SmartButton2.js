import React, {Component} from 'react';

import '../assets/styles/smartButton.less';

class SmartButton extends Component {
  render() {

    // 声明按钮的基本样式
    let clz = 'smart-btn';
    // 判断是否是块级样式
    if(this.props.block){
      clz +=' block';
    }

    // this.props = {block : true， value : '登录'}
    // 由于多了一个block属性，删除掉

    // console.log(this.props);
    // delete this.props.block;
    // console.log(this.props);

    // 重新封装参数
    // let props = {
    //
    //         value : this.props.value,
    //         onClick : func
    // };
    // 为了解决this.props的安全性控制（只读），直接做一个副本
    let props = Object.assign({},this.props);
    delete props.block;

    return (
      <input className={clz} type='button' {...props}/>
    );
  }
}

SmartButton.propTypes = {
  block : React.PropTypes.bool,
  value : React.PropTypes.string.isRequired
};
SmartButton.defaultProps = {};

export default SmartButton;
