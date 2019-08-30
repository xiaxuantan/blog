import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'

import {faGithub, faLinkedin, faWeibo} from '@fortawesome/free-brands-svg-icons'
import {Nav, Row} from "react-bootstrap";


library.add(faGithub, faLinkedin, faWeibo);

const Footer = () => (
    <div>
        <Row class="justify-content-center">
            <div className="col text-center">
                <p>Copyright &#169; 2019 Xiaxuan Tan</p>
            </div>
        </Row>

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

    </div>
);

export default Footer