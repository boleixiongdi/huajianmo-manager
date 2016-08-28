import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Menu, Icon, Spin } from 'antd'
import { VelocityComponent, VelocityTransitionGroup, velocityHelpers } from 'velocity-react'
import 'velocity-animate/velocity.ui'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Link, IndexLink, browserHistory  } from 'react-router'
import * as ItemsActions from '../actions/index'

import '../style/home.css'
import 'antd/dist/antd.css';

class Header extends Component {

  render () {
    const {isAuthenticated} = this.props
    return (
      <Row className='header'>
        <Col span={20} offset={2}>
          <h2 className='logo'><Icon type="appstore" /> 花尖墨 / 管理平台</h2>
          {isAuthenticated &&
          <Menu
              onClick = {e => this.setHash(e.key)}
              id='nav'
              mode="horizontal">
              <Menu.Item  key="home">
                <Link className="tab-item" to={`/home`} activeClassName="active">
                  <Icon type="home" />首页
                </Link>
              </Menu.Item>
              <Menu.Item  key="add">
                <Link className="tab-item" to={`/add`} activeClassName="active">
                  <Icon type="plus-circle-o" />新增用户
                </Link>
              </Menu.Item>
              <Menu.Item  key='edit' disabled>
                <Link className="tab-item" to={`/edit`} activeClassName="active">
                  <Icon type="edit" />编辑用户
                </Link>
              </Menu.Item>
              <SubMenu title={<span><Icon type="setting" />用户中心</span>}>
                  <Menu.Item key="list">
                    <Link className="tab-item" to={`/list`} activeClassName="active">
                      修改个人资料
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="add">
                    <a onClick={() => this.onLogoutClick()} className="tab-item">
                      退出
                    </a>
                  </Menu.Item>
              </SubMenu>
              <Menu.Item  key="sysmanager">
                <Link className="tab-item" to={`/sysmanager`} activeClassName="active">
                  <Icon type="bars" />系统管理
                </Link>
              </Menu.Item>
          </Menu>
          }
          {!isAuthenticated &&
          <div>
            <Link className="tab-item" to={`/login`} activeClassName="active">
              <Icon type="bars" />登录
            </Link>
          </div>
          }
        </Col>
      </Row>
    )
  }

  constructor (props) {
    super(props)
  }

  setHash(key) {
    console.log('click ', key);
    this.setState({
      current: key,
    });
  }

  onLogoutClick() {
    this.props.actions.logoutUser()
    console.log('context plain');
    console.log(this.context);
    //this.context.router.push('/');
    this.props.history.push('/login');
  }
}

//将state上的数据绑定到props上
function mapStateToProps(state) {
  console.log(state)
  //rootReducer 这个名字跟store里一致
  var _thisState = state.rootReducer;
  console.log(_thisState.auth.isAuthenticated);
  return {
      state,
      isAuthenticated:_thisState.auth.isAuthenticated
  }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(ItemsActions, dispatch)
  }
}

/*export default connect(state => ({
    items: state.items,
    filter: state.filter
}), dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(App) */

//写法等同于上面写法

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(Header)
