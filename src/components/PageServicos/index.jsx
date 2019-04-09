import React, { Fragment } from 'react'
import {Container, Row, Col} from 'reactstrap'
import Style from './styles'

const PageServicos = _Props => {
    return(
        <Fragment>
            <Style />
            <Container fluid className='container'>
            <h1>Serviços prestados</h1>
            <hr/>
                <Row>                    
                    <Col>
                    <h2>Website simples</h2>
                    <p>Ideal para perstadores de Serviços
                        e pontos comerciais que lidam com
                        público regional e querem ter uma
                        landing page contendo as informações
                        de contato, endereço e produtos ou
                        serviços prestados
                    </p>
                    </Col>                     
                </Row>
                <Row>
                    <Col>
                    <h2>Wordpress</h2>
                    <p>Ideal para quem quer ter um website que
                    permita publicação e edição de textos, 
                    imagens, videos que estejam focados no
                    marketing de conteúdo. Wordpress é uma
                    ótima escolha para quem quer publicar um
                    portfólio online.</p>
                    </Col>                   
                </Row>
            </Container>            
        </Fragment>
    )
}

export default PageServicos