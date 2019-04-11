import React, { Component, Fragment } from 'react'
import PageViewHome from './components/PageViewHome'
import PageServicos from './components/PageServicos'
import PageTechnologies from './components/PageTechnologies';

class App extends Component {
  render() {
    return (  
      <Fragment>
        <PageViewHome />
        <PageServicos />
        <PageTechnologies />
      </Fragment>         
    )
  }
}

export default App
