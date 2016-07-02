import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

//通过 ES6+ 的箭头函数（ Arrow functions ）和属性初始化（ property initializers ）
//这两个特性使得把函数的this指向绑定为组件的实例变得非常的简单
export default class LeftNav extends Component {

  //equal componentWillMount: function() { … },
  constructor(props) {
      super(props);
      // Operations usually carried out in componentWillMount go here
      this.state = {
        current: '1',
        openKeys: [],
      }
      // Manually bind this method to the component instance...
      this.handleClick = this.handleClick.bind(this);
      this.onToggle = this.onToggle.bind(this);
  }

  handleClick(e) {
      console.log('click ', e);
      // ...to ensure that 'this' refers to the component instance here.
      this.setState({
        current: e.key,
        openKeys: e.keyPath.slice(1),
      });
  }

  onToggle(info) {
      this.setState({
        openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
      });
  }

	render() {
		return (
        <Menu onClick={this.handleClick}
          style={{ width: 240, borderRadius: '6px'}}
          openKeys={this.state.openKeys}
          onOpen={this.onToggle}
          onClose={this.onToggle}
          selectedKeys={[this.state.current]}
          mode="inline">
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>会员管理</span></span>}>
            <Menu.Item key="1">选项1</Menu.Item>
            <Menu.Item key="2">选项2</Menu.Item>
            <Menu.Item key="3">选项3</Menu.Item>
            <Menu.Item key="4">选项4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>vip会员管理</span></span>}>
            <Menu.Item key="5">选项5</Menu.Item>
            <Menu.Item key="6">选项6</Menu.Item>
            <SubMenu key="sub3" title="三级导航">
              <Menu.Item key="7">选项7</Menu.Item>
              <Menu.Item key="8">选项8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>管理员管理</span></span>}>
            <Menu.Item key="9">选项9</Menu.Item>
            <Menu.Item key="10">选项10</Menu.Item>
            <Menu.Item key="11">选项11</Menu.Item>
            <Menu.Item key="12">选项12</Menu.Item>
          </SubMenu>
        </Menu>
			);
	}
}
