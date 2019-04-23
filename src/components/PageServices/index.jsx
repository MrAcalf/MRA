import React from 'react'
import Styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'

const Style = Styled.div`
    height: 100vh;
    width: 100%;
    background: #eee;
    padding: 1rem 3rem;   
    text-align: center; 

    .service{
        padding: 1rem 0;
        display:flex;
    }    

    .servicos{

    }

    .icon{
        border: 1px solid #555;
        padding: 5px;
        border-radius: 3px;
    }
    
    p{
        flex: 4;
        text-align: justify;
    }
    ul{
        list-style: none;
        flex: 4;
    }
    ul li{
        padding-left: 2rem;
        text-align: left;
    }
    h1{
        font-size: 1.8rem;
        padding-bottom: 16px;
    }

    h2{
        margin-top: 1rem;
    }

    @media (max-width: 700px){
        line-height: 1.4;
        .service{
            padding-bottom: 5px;
            padding-top: 10px;
        }

        h1{
        font-size: 1.6rem;
        padding-bottom: 10px;
        }

        h2{
            font-size: 1.3rem;
        }
    }

`


const PageServices = (_props) => {
    return (
        <>
            <Style id='servicos'>
                <h1>Serviços Prestados</h1>
                <article className='servicos'>
                    <div>
                    <h2><FontAwesomeIcon icon={faGlobe} size='1x'/> Website comum</h2>
                        <div className='service'>                                                    
                            <p>Ideal para empresas que precisam de uma página web para
                                expor sua localização, telefone de contato e informações
                                sobre produtos e serviços prestados.                 
                            </p>
                            <ul>
                                <li><strong>Incluso:</strong></li>
                                <li>• 3 páginas</li>
                                <li>• Logotipo da empresa</li>
                                <li>• Mapa com localização</li>
                                <li>• Contato da empresa</li>
                            </ul>                            
                        </div>
                        <p>Esse modelo auxilia 
                            que seu site seja encontrado por pessoas 
                            que utilizando os mecanismo de pesquisa estejam procurando o 
                            produto ou serviço que você vende.
                        </p>
                    </div>
                    <div>
                    <h2><FontAwesomeIcon icon={faWordpress} size='1x'/> Wordpress</h2>
                        <div className='service'>                                                    
                            <p>Feito para quem quer trabalhar com publicações, seja para
                                blog, site de notícias ou artigos. Esse tipo de site é ótimo
                                para empresas cujo foco é o marketing de conteúdo.
                                A grande maioria dos publicadores de notícias, blogs e artigos
                                usam o wordpress pois ele é mais fácil de ser reanqueado na google                   
                            </p>                                                        
                        </div>
                    </div>
                </article>
            </Style>
        </>
    )
}

export default PageServices