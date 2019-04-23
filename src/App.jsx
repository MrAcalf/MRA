import React, { Component } from 'react'
import PageViewHome from './components/PageViewHome'
import PageTechnologies from './components/PageTechnologies'
import PageServices from './components/PageServices'
import PageContato  from './components/PageContato'



class App extends Component {
  render() {
    return (  
      <>
        <PageViewHome />
        <PageServices />
        <PageTechnologies />
        <PageContato />
      </>         
    )
  }
}

export default App
