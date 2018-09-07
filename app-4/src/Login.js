import React,{ Component } from "react";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsername = (e) => {
        this.setState({username: e.target.value});
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }

    alertInfo = (user, pass) => {
        alert(`username: ${user} password: ${pass}`);
        this.setState({username: "", password: ""});
    }

    render() {
        return(
            <div>
                <input onChange={e => this.handleUsername(e)}></input>
                <input onChange={e => this.handlePassword(e)}></input>
                <button onClick={() => this.alertInfo(this.state.username, this.state.password)}>Login</button>
            </div>
        );
    }
}

export default Login;