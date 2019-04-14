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

    h2{
        color: #fff;
        margin-bottom: 2rem;
    }

    @media(max-width: 375px;){
        margin-top: 1.5rem;
    }
`
const Button = Styled.button`
    display: inline-block;
    font-size: 1.5em;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background-color: #37c8ab;
    color: white;    
    border: 2px solid #37c8ab;
    align-self: center;

    :hover{
        background-color: white;
        border: 2px solid #37c8ab;
        color: #37c8ab;
    }

    :active{
        background: transparent;
        color: white;        
        border: 2px solid white;
    }
`

const MainContent = (_props) => {
    return (
        <>
            <Style>
                <Title main>MRA Web Design</Title>
                <h2>Prestamos serviços de Web Design na cidade de Guaratinguetá e 
                proximidades. Entre e contato já e agente um orçamento.
                </h2>
                <Button>Ligue Me</Button>
            </Style>            
        </>
    )
}

export default MainContent