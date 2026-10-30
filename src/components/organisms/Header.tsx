import { useState } from 'react';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import type { Portfolio } from '../../data';
import Icon from '../atoms/Icon';

export default function Header({ profile, navigation }: Pick<Portfolio, 'profile' | 'navigation'>) {
  const [open, setOpen] = useState(false);
  return <Navbar tag="header" expand="lg" dark className="site-nav fixed-top"><Container>
    <NavbarBrand href="#home" className="brand">{profile.initials}<span className="brand-dot">.</span><span className="brand-name"> {navigation.brandSuffix}</span></NavbarBrand>
    <NavbarToggler onClick={() => setOpen(value => !value)} className="nav-toggle" aria-label={navigation.toggleLabel} aria-expanded={open} aria-controls="main-navigation">
      <Icon name={open ? 'close' : 'menu'} size={20} />
    </NavbarToggler>
    <Collapse id="main-navigation" isOpen={open} navbar>
      <Nav className="ms-auto align-items-lg-center" navbar>
        {navigation.items.map(item => <NavItem key={item.href}><NavLink href={item.href} onClick={() => setOpen(false)}>{item.label}</NavLink></NavItem>)}
        <NavItem><a className="nav-contact" href={`mailto:${profile.email}`}>{navigation.contactLabel}<Icon name="arrowUpRight" size={15} /></a></NavItem>
      </Nav>
    </Collapse>
  </Container></Navbar>;
}
