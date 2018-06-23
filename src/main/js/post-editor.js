import React from "react"
import Markdown from './markdown'


class PostEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: this.props.editing || '',
            title: this.props.title || '',
            id: this.props.id || null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({editing: event.target.value});
    }

    render() {
        return (
            <form className="container full-height form-horizontal" role="form">
                <div className="row" style={{height: "8%"}}>
                    <div className="form-group">
                        <label className="col-xs-1 control-label">Post Title:</label>
                        <div className="col-xs-4">
                            <input type="text" id="post-title" className="form-control"
                                   placeholder="Please input your post title"/>
                        </div>
                        <div className="col-xs-1">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
                <div className="row" style={{height: "92%"}}>
                    <textarea className="col-xs-6 full-height edit-screen" onChange={this.handleChange}/>
                    <section className="col-xs-6 full-height edit-screen">
                        <div className="full-height" style={{
                            display: "block",
                            overflow: "auto",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            padding: "2px 10px"
                        }}>
                            <Markdown source={this.state.editing}/>
                        </div>
                    </section>
                </div>
            </form>
        )
    }
}


export default PostEditor