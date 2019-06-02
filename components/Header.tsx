import React, {Component} from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

const Header = ()=>{
       return (
       <Navbar color="light" light expand="md">
          <NavbarBrand>Delia Lugo / Broker Associate</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link href="/index"><a>Inicio</a></Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link href="/search"><a>Buscar</a></Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link href="#"><a>Buscar Nuevas</a></Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link href="#"><a>Nosotros</a></Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link href="#"><a>Admin</a></Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>)
    }

export default Header;