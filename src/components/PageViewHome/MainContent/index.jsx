import React from 'react'
import Styled from 'styled-components'
import Title from '../../../styled-components/Title'

const Style = Styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0.8;
    padding: 0 3rem;
    text-align: center;
    margin-top: 3rem;

    h1{
       margin-bottom: 30px; 
    }

    p{
        color: #fff;
        margin-bottom: 2rem;
    }
`
const Button = Styled.button`
    display: inline-block;
    font-size: 1.5em;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    align-self: center;

    :hover{
        background-color: white;
        color: #555;
    }

    :active{
        background-color: #37c8ab;
        color: white;
        border: 2px solid #37c8ab;
    }
`

const MainContent = (_props) => {
    return (
        <>
            <Style>
                <Title main>MRA Web Design</Title>
                <p>Lorem Lorem Lorem Lorem Lorem Lorem 
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
                <Button>Ligue Me</Button>
            </Style>            
        </>
    )
}

export default MainContent