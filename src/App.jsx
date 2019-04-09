import React, { Component, Fragment } from 'react'
import PageViewHome from './components/PageViewHome'
import PageServicos from './components/PageServicos'

class App extends Component {
  render() {
    return (  
      <Fragment>
        <PageViewHome />
        <PageServicos />
      </Fragment>         
    )
  }
}

export default App
