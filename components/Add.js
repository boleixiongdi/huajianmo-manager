import React, { Component } from 'react'
import {Col} from 'antd'
import Edit from './Edit'
import LeftNav from './LeftNav'

class Add extends Component {
	render() {
		return (
			<div style={{textAlign:'center', paddingBottom: 50}}>
				<Col offset={1} span={5} style={{textAlign: 'left'}}><LeftNav /></Col>
				<Col span={17} style={{background: '#fff',padding: '20px', borderRadius: '6px', minHeight: '350px', marginBottom: '25px'}}>
					<Edit {...this.props} isAdd={true} />
				</Col>
			</div>
		);
	}
}

export default Add;
