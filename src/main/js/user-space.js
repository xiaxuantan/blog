import React from 'react';

class UserSpace extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user: null};
        console.log(props)
    }

    componentDidMount() {
        let rest = require('rest');
        let mime = require('rest/interceptor/mime');

        let client = rest.wrap(mime);
        let path = "/api/user?name=" + this.props.match.params.name;

        client({path: path}).then(response => {
            this.setState({user: response.entity});
            console.log(response);
        });
    }

    render() {
        if (!this.state.user) {
            return (
                <h1>Not Found!</h1>
            )
        } else {
            return (
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{this.state.user.userName}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{this.state.user.email}</td>
                    </tr>
                    <tr>
                        <th>Gender</th>
                        <td>{this.state.user.gender}</td>
                    </tr>
                    <tr>
                        <th>Birthday</th>
                        <td>{this.state.user.birthday}</td>
                    </tr>
                    </tbody>
                </table>
            )
        }
    }

}

export default UserSpace;
