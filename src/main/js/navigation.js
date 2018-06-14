import React from 'react'
import {Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap'

const Navigation = () => (
    <Navbar inverse staticTop collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Xuan24's Blog</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="/posts">
                    Posts
                </NavItem>
                <NavItem eventKey={2} href="/photos">
                    Photos
                </NavItem>
                <NavItem eventKey={3} href="/about">
                    About
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="/">
                    <span><Glyphicon glyph="log-in" /></span> Sign In
                </NavItem>
                <NavItem eventKey={2} href="/">
                    Sign Up
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation