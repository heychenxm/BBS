import React, {Component} from 'react';

// 引入样式
import '../assets/styles/smartFormInput.less'

class SmartFormInput extends Component {
  // 对外提供一个公共方法，来获取表单的值
  getValue(){
    /*
     *  要获取一个元素的值
     *    1） 找到元素对象
     *    2） 从元素对象上获取值
     * */
    // 1） 找到元素对象
    var inputEl = this.refs.input;
    // 2） 从元素对象上获取值
    var value = inputEl.value;
    // 3) 返回结果
    return value;
  }

  render() {
    let iconName = 'icomoon-'+this.props.iconName;

    return (
      // 编写jsx结构
      <div className='smart-form-group'>
        <label className='form-label'>
          <i className={iconName}></i>
        </label>
        <input ref='input' className='form-field' type={this.props.type}/>
      </div>
    );
  }
}

SmartFormInput.propTypes = {
    'iconName': React.PropTypes.string.isRequired,
    'type' : React.PropTypes.string.isRequired
};
SmartFormInput.defaultProps = {
    'type' : 'text'
};

export default SmartFormInput;
