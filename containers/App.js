import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemsActions from '../actions/index'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

class App extends Component {

    componentDidMount() {
      console.log("this.props");
      console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      console.log(this.props);
      console.log("app---componentWillReceiveProps");
      if (!this.props.auth.isAuthenticated && nextProps.auth.isAuthenticated) {
        console.log('登录成功后跳转');
        this.props.history.push('/');
      }else if (this.props.auth.isAuthenticated && !nextProps.auth.isAuthenticated) {
        console.log('退出后跳转');
        this.props.history.push('/');
      }
    }

    render() {
        const { props: { children } } = this;
        return (
          <div>
            <Header history={this.props.history} />
            <main style={{textAlign:'center', minHeight: '350px'}}>
              {children}
            </main>
            <Footer />
          </div>
        );
    }
}

//将state上的数据绑定到props上
function mapStateToProps(state) {
  console.log(state)
  //rootReducer 这个名字跟store里一致
  var _thisState = state.rootReducer;
  return {
      auth:_thisState.auth
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
export default connect(mapStateToProps, mapDispatchToProps)(App)
