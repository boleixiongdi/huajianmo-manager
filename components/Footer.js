import React, { Component } from 'react'

export default class Footer extends Component {

  render () {
    return (
      <div>
        <footer className='footer'>
          <h2>花尖墨
              <a target='_blank' href='http://www.huajianmo.com'>版权所有</a>
          </h2>
        </footer>
    	</div>
    )
  }

  constructor (props) {
    super(props)
  }
}
