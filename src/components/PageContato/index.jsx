import React from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Style = Styled.div`
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1{
        flex:1;
    }

    iframe{
        flex: 8;
    }

    .footer-responsive{
        display:flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        text-align: left;
        background: #344251;
        flex: 1;
    }

    .footer-responsive ul{
        margin-left: 2em;
    }

    .footer-responsive ul li{
              
        float: left;
        color: #fff;
        list-style:none;
        margin-right: 2em;
    }

    a{
        color:white;
    }

    a:active{
        color: #37c8ab;
    }

    a:visited{
        color: white;
    }

`

const PageContato = (_Props) => {
    return (
        <>
            <Style>
                <h1 id='contato'><FontAwesomeIcon icon={faWhatsapp} /> Contato: <address>12 98168 2087</address></h1>
                <iframe 
                title='Map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.044226787175!2d-45.203523176526296!3d-22.800825052066962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccc440b12a74b5%3A0xe27524323f6eca45!2sR.+Tupinamb%C3%A1s%2C+250+-+Pedregulho%2C+Guaratinguet%C3%A1+-+SP%2C+12515-190!5e0!3m2!1spt-BR!2sbr!4v1555351610883!5m2!1spt-BR!2sbr" 
                width="100%" 
                frameBorder="0" 
                allowFullScreen>
                </iframe>
                <footer className='footer-responsive'>
                    <ul>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/mracalf/" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size='2x' ></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/MrAcalf" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size='2x' ></FontAwesomeIcon>
                            </a>
                        </li>
                    </ul>
                </footer>
            </Style>            
        </>
    )
}

export default PageContato