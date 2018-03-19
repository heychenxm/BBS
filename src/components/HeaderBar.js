import React, {Component} from 'react';

import {
  NavBar
} from 'amazeui-touch';

class HeaderBar extends Component {
  render() {
    // 顶栏的配置
    const dataAll = {
      title: this.props.title,
      amStyle: 'secondary'
    };

    if(this.props.search){
      Object.assign(dataAll, {rightNav : [{href: 'http://m.jd.com', icon: 'search'}]});
    }

    return (
      <NavBar id="xxx" {...dataAll}/>
    );
  }
}

HeaderBar.propTypes = {
  title : React.PropTypes.string.isRequired,
  search  : React.PropTypes.bool
};
HeaderBar.defaultProps = {};

export default HeaderBar;
