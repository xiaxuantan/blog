import React from 'react'
import Markdown from './markdown'
import {Card} from "react-bootstrap";


const website = `

# Blog

### Use cases:

- Admin can manully upload posts (by modifying MYSQL and AWS S3)
- Guests can view posts
- Guests can make comments on posts and evaluate comments from others

### Tech stack

- Backend stack: JavaWeb (SpringBoot, SpringMVC, Spring, MyBatis)
- Frontend stack: ReactJS, Redux, Webpack, Bootstrap 4
- Storage: AWS S3, Mysql

### Deployment

\`\`\`shell
mvn clean
mvn package
sudo java -jar ***.jar --spring.profiles.active=prod >/dev/null 2>&1 &
\`\`\`

### References:

- [Integrate front end building tools with maven](https://github.com/eirslett/frontend-maven-plugin)

- [Bootstrap 4 with React](https://react-bootstrap.netlify.com/)

- [Install Java 12 on Ubuntu](https://www.linuxuprising.com/2019/03/how-to-install-oracle-java-12-jdk-12-in.html)

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