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

    return (
      <input className={clz} type='button' value={this.props.value}/>
      //<input className={clz} type='button' {...this.props}/>
    );
  }
}

SmartButton.propTypes = {
  block : React.PropTypes.bool,
  value : React.PropTypes.string.isRequired
};
SmartButton.defaultProps = {};

export default SmartButton;
