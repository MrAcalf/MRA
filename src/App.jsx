import React, { Component } from 'react'
import PageViewHome from './components/PageViewHome'
import PageTechnologies from './components/PageTechnologies'
import PageServices from './components/PageServices';



class App extends Component {
  render() {
    return (  
      <>
        <PageViewHome />
        <PageServices />
        <PageTechnologies />


      </>         
    )
  }
}

export default App
