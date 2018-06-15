import React from 'react'
import {Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap'

const Navigation = () => (
    <Navbar inverse staticTop collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/">Xiaxuan (Peter) Tan</a>
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
                <NavItem eventKey={4} href="/cv">
                    CV
                </NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={1} href="/sign-in">
                    <span><Glyphicon glyph="log-in" /></span> Sign In
                </NavItem>
                <NavItem eventKey={2} href="/sign-up">
                    Sign Up
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Navigation