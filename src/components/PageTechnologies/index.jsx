import React from 'react'
import Style from './styles'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faJs, faWordpress, faCss3, faNode, faReact } from '@fortawesome/free-brands-svg-icons'

const PageTechnologies = _Props => {
    return(
        <>
        <Style />
        <div className='fullSizeTech'>
            <h1>Tecnologias que utilizo</h1>
            <section className='flex'>
                <section className='tecnologias flex flex-wrap size column'>
                    <div className='icones'>
                        <p>HTML</p> <FontAwesomeIcon icon={faHtml5} size='5x' />
                    </div>
                    <div className='icones'>
                        <p>CSS</p> <FontAwesomeIcon icon={faCss3} size='5x' />
                    </div>
                    <div className='icones'>
                        <p>JavaScript</p> <FontAwesomeIcon icon={faJs} size='5x' />
                    </div>                
                </section>
                <section className='tecnologias flex flex-wrap size column'>
                    <div className='icones'>
                        <p>Wordpress</p> <FontAwesomeIcon icon={faWordpress} size='5x' />
                    </div>
                    <div className='icones'>
                        <p>Node JS</p> <FontAwesomeIcon icon={faNode} size='5x' />
                    </div>
                    <div className='icones'>
                        <p>React JS</p> <FontAwesomeIcon icon={faReact} size='5x' />
                    </div>                
                </section>
            </section>
                       
        </div>
        </>
    )
}

export default PageTechnologies