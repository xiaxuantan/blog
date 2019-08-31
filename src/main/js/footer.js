import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'

import {faGithub, faLinkedin, faWeibo} from '@fortawesome/free-brands-svg-icons'
import {Card, Nav} from "react-bootstrap";


library.add(faGithub, faLinkedin, faWeibo);

const Footer = () => (
    <Card className="text-center border-0">
        <Card.Body>
            <Card.Text>
                Copyright &#169; 2019 Xiaxuan Tan
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="https://www.linkedin.com/in/xiaxuan-tan">
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.github.com/xiaxuantan">f
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="https://www.weibo.com/peterxuan">
                        <FontAwesomeIcon icon={faWeibo} size="lg"/>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Card.Footer>
    </Card>

);

export default Footer