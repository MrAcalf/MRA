import React from 'react'
import Styled from 'styled-components'
import NavbarNav from './NavbarNav'
import MainContent from './MainContent'

const Style = Styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    background: 
    /* top, transparent red */ 
    linear-gradient(
      #344251ee, 
      #344251cc
    ),
    /* bottom, image */
    url(https://media.giphy.com/media/fwDiewrmmBUhnNkgOe/giphy.gif);
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
`

const PageViewHome = (_props) => {
    return (
        <>
            <Style alt='Tela principal do site. Landing Page'>
                <NavbarNav />
                <MainContent />
            </Style>            
        </>
    )
}

export default PageViewHome