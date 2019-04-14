import React from 'react'
import NavbarStyle from '../../../styled-components/NavbarStyle'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../../styled-components/Logo'

const NavbarNav = (_props) => {
    return (
        <>
        <NavbarStyle />
            <header className='nav' alt='Cabeçalho'>
                <input type='checkbox' id='nav-check' alt='Checkbox invisível. Dá função ao ícone responsivo'/>
                <div className='nav-header' alt='MRA Logotipo e link para a raiz do site.'>
                    <div className='nav-title'>
                        <Router>
                            <NavLink to="/">
                                <Logo />
                            </NavLink>
                        </Router>
                    </div>                    
                </div>
                <div className='nav-btn' alt='Divisoria do ícone responsivo, visível em mobile'>
                    <label htmlFor='nav-check'>
                        <FontAwesomeIcon icon={faBars} size='2x'alt='ícone responsivo: Menu'/>
                    </label>
                </div>
                <nav className='nav-links' alt='links para navegação'>
                    <Router >
                        <NavLink to="/servicos" alt='sessão serviços'>Serviços</NavLink>
                        <NavLink to="/tecnologias" alt='sessão tecnologias'>Tecnologias</NavLink>
                        <NavLink to="/contato"alt='sessão contato' >Contato</NavLink>
                    </Router>
                </nav>               
            </header>
        </>
    )
}

export default NavbarNav