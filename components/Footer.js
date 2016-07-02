import React, { Component } from 'react'

export default class Footer extends Component {

  render () {
    return (
      <div>
        <footer className='footer'>
          <h2>此demo仅供个人学习使用
              <a target='_blank' href='https://github.com/zkske121/daily/tree/master/demo/redux-react-director3'>源码地址</a>
          </h2>
        </footer>
    	</div>
    )
  }

  constructor (props) {
    super(props)
  }
}
