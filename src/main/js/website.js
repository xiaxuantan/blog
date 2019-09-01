import React from 'react'
import Markdown from './markdown'
import {Card, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";


const website = `

# blog

### Tech stack

- Backend stack: JavaWeb (SpringBoot, SpringMVC, Spring, MyBatis)
- Frontend stack: ReactJS, Redux, Webpack, Bootstrap 4
- Storage: AWS S3, Mysql

### References:

- [Integrate front end building tools with maven](https://github.com/eirslett/frontend-maven-plugin)

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