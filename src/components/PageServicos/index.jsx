import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Style from './styles'
import faWordpress from '../../icons/wordpress-brands.svg'
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PageServicos = _Props => {
    return(
        <>
            <Style />
            <Container fluid className='container'>
            <h1>Serviços prestados</h1>
            <hr/>
                <Row>                    
                    <Col>
                    <h2><FontAwesomeIcon icon={faGlobe} /> Website simples</h2>
                    <p>Ideal para prestadores de Serviços
                        e pontos comerciais que lidam com
                        público e querem ter uma landing page 
                        contendo as informações de 
                        contato, endereço e produtos ou
                        serviços prestados. É uma ótima ferramenta 
                        para quem quer ser encontrado por seus cliente
                        na internet.
                    </p>
                    </Col>                     
                </Row>
                <Row>
                    <Col>
                    <h2><img src={faWordpress} className='wordpressIcon' alt='Icone do wordpress'/> Wordpress</h2>
                    <p>Ideal publicações de posts, para portfólios,
                        para marketing de conteúdo, publicações de
                        artigos, notícias além de publicação de vídeos
                        imagens, e galerias de fotos. O Wordpress é uma 
                        ferramenta completa para quem quer ter um site 
                        intitucional ou um blog pessoal focado em sua 
                        carreira.
                    </p>
                    </Col>                   
                </Row>
            </Container>            
        </>
    )
}

export default PageServicos