import React, {Component, Fragment} from 'react'
import SiteNavigationBar from './SiteNavigationBar'
import ViewHomeContent from './ViewHomeContent'
import Background from './Background'

class PageViewHome extends Component{
    render(){
        return(
            <Fragment>
                <Background>
                    <SiteNavigationBar />
                    <ViewHomeContent/>
                </Background>                
            </Fragment>  
        )
    }
}

export default PageViewHome