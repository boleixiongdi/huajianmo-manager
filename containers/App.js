import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'

function App({ pushPath, children }) {
  const viewFlag = true;
  return (
    <div>
      {viewFlag &&
        <div>
          <Header />
          <main style={{textAlign:'center', minHeight: '350px'}}>
            {children}
          </main>
          <Footer />
        </div>
      }
      {!viewFlag &&
        <div>
          <Login />
        </div>
      }
    </div>
  );
};

module.exports = connect(
  null
)(App)
