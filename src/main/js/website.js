import React from 'react'
import Markdown from './markdown'
import {Card, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";


const website = `

# Website

- Backend stack: JavaWeb (SpringBoot, SpringMVC, Spring, MyBatis)
- Frontend stack: ReactJS, Redux, Webpack
- Storage: AWS S3, Mysql

`;


class Website extends React.Component {

    render() {
        return (
            <Card bg="light" className="border-0">
                <Card.Body>
                    <Card.Text>
                        <Markdown source={website}/>
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }
}


export default Website