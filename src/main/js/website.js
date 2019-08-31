import React from 'react'
import Markdown from './markdown'
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";


const website = `

# Website

---

| Date           | Notes                                                        |
| -------------- | ------------------------------------------------------------ |
| **2018–06-17** | Finish a demo that representing blog (but the admin has to insert records into database manually) |
| **2018–06-23** | Finish a two-screen markdown editor; allow seeing rendered result real-time |

## Plans

---

:o: Finish a markdown editor that I can get rid of database operations (Finished on 2018-06-23) 

:x: Learn GraphQL for future refactoring
`;


class Website extends React.Component {

    render() {
        return (
            <Row noGutters md="auto">
                <Col noGutters>
                    <Markdown source={website}/>
                </Col>
            </Row>
        )
    }
}


export default Website