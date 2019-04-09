import React from 'react'
import FullScreenBg from './FullScreenBg'
import ContainerCentral from './ContainerCentral'
import HeaderContent from './HeaderContent'

const ViewHomeContent = _props => {
    return (
    <FullScreenBg>
        <ContainerCentral>
            <HeaderContent>
                    <h1>MRA Web Design</h1>
                    <br />
                    <p>Seviço de criação de sites e design
                        na cidade de Guaratinguetá e proximidades 
                        na região do Vale do Paraíba.</p>
                    <a className='btn' rel="noopener noreferrer" href='https://github.com/MrAcalf' target='_blank'>Contactar</a>
            </HeaderContent>                      
        </ContainerCentral>        
    </FullScreenBg>
    )
}

export default ViewHomeContent