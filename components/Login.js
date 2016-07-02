import React, { Component } from 'react'
import LeftNav from './LeftNav'
import {Col} from 'antd'
import { VelocityTransitionGroup, velocityHelpers } from 'velocity-react'
import 'velocity-animate/velocity.ui'

import Echart from './Home/Echart'

export default class Login extends Component {

	render() {
		// 动画可在velocity-animate/velocity.ui.js Velocity.RegisterEffect.packagedEffects中查看，使用key值即可
		return (
				<div style={{textAlign:'center', paddingBottom: 50}}>
					<div onClick = {this.setHashs}>登陆界面</div>
				</div>
			);
	}

	constructor(props) {
		super(props);
		this.setHashs = this.setHashs.bind(this);
	}

	setHashs() {
    console.log('click ');
    this.setState({
      viewFlag: true,
    });

  }
}
