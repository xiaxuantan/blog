import React from 'react'
import Markdown from './markdown'

const qs = require('query-string');

class Post extends React.Component {

    constructor(props) {
        super(props);
        let templateBody = "**Fetching and rendering document. Please wait...**";
        this.state = {post: null, body: templateBody};
        this.queryParams = qs.parse(this.props.location.search)
    }

    componentDidMount() {

        let rest = require('rest');
        let mime = require('rest/interceptor/mime');
        let client = rest.wrap(mime);
        let path = '/api/post?type=single&id=' + this.queryParams.id;

        client({path: path}).then(response => {
            this.setState({post: response.entity});
            if (this.state.post) {
                let bodyPath = "/api/asset/" + this.state.post.bodyKey;
                client({path: bodyPath}).then(response => {
                    console.log(response.entity);
                    this.setState({body: response.entity})
                })
            }

        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-8 col-md-8">
                        <Markdown source={this.state.body}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post