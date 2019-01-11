import React,{ Component } from "react";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value})
    }

    alertInfo = (user, pass) => {
        alert(`username: ${user} password: ${pass}`);
        this.setState({username: "", password: ""});
    }

    render() {
        const { username, password } = this.state;
        console.log(this.state)
        return <div>
            <input name="username" value={username} onChange={e => this.handleChange(e)} />
            <input name="password" value={password} onChange={e => this.handleChange(e)} />
            <button onClick={() => this.alertInfo(username, password)}>
              Login
            </button>
          </div>;
    }
}

export default Login;