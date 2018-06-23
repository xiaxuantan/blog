import React from 'react'
import Markdown from './markdown'


const milestones = `

# Milestones

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


class Milestone extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <Markdown source={milestones}/>
                    </div>
                </div>
            </div>
        )
    }

}


export default Milestone