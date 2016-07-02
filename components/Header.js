import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Menu, Icon, Spin } from 'antd'
import { VelocityComponent, VelocityTransitionGroup, velocityHelpers } from 'velocity-react'
import 'velocity-animate/velocity.ui'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Link, IndexLink, browserHistory  } from 'react-router'

import '../style/home.css'
import 'antd/dist/antd.css';

export default class Header extends Component {

  render () {
    return (
      <Row className='header'>
        <Col span={20} offset={2}>
          <h2 className='logo'><Icon type="appstore" /> 花尖墨 / 管理平台</h2>
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
                    <Link className="tab-item" to={`/add`} activeClassName="active">
                      退出
                    </Link>
                  </Menu.Item>
              </SubMenu>
              <Menu.Item  key="sysmanager">
                <Link className="tab-item" to={`/sysmanager`} activeClassName="active">
                  <Icon type="bars" />系统管理
                </Link>
              </Menu.Item>
          </Menu>
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

}
