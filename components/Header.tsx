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

import './Header.scss';
const NavItemLink = (props:{text:string, href:string})=>(
  <NavItem>
    <NavLink><Link href={props.href}><a className="text-light">{props.text}</a></Link></NavLink>
  </NavItem>
)

const Header = ()=>{
       return (
       <Navbar style = {{backgroundColor:"#CC9B39"}} expand="md">
          <NavbarBrand className = "text-light">Delia Lugo / Broker Associate</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItemLink href="/index" text="Inicio"/>
              <NavItemLink href="/userDetail" text="Usuario"/>
              <NavItemLink href="/search" text="Buscar"/>
              <NavItemLink href="#" text="Buscar Nuevas"/>
              <NavItemLink href="#" text="Nosotros"/>
              <NavItemLink href="#" text="Admin"/>
            </Nav>
          </Collapse>
        </Navbar>)
    }

export default Header;