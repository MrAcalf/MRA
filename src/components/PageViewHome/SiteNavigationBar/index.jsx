import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap'
import SiteLogo from './SiteLogo'
import logo from '../../../img/logo.png'

const divWidth = {
  position: 'absolute',
  width: '100%',
  height: '0px'
}

class SiteNavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={divWidth}>
        <Navbar color="transparent" dark expand="md">
          <NavbarBrand href="/"><SiteLogo src={logo} alt='MRA Logo'/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/servicos/">Serviços</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sobre/">Sobre nós</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contato/">Contato</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default SiteNavigationBar