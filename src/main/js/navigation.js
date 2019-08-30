import React from 'react'
import {Navbar, Nav} from "react-bootstrap";

const Navigation = () => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/posts">Posts</Nav.Link>
            <Nav.Link href="/photos">Photos</Nav.Link>
        </Nav>
    </Navbar>
);

export default Navigation