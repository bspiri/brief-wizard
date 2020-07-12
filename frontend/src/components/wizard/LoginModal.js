import React from "react";
import ReactModalLogin from "react-modal-login";
import styled from "styled-components";
import "./LoginModal.css"
const Button = styled.button`
	width: 150px;
	height: 45px;
	font-size: 1.1em;
	font-weight: 600;
	border: none;
	background: #FEE647;
	color: #232733;
	border-radius: 5px;
	margin-right: 20px;
	margin-bottom: 50px;
    cursor: pointer;
    // float: right;
	@media (max-width: 600px) {
		margin-right: 0px;
		margin-bottom: 20px;
	}
`;
const A = styled.a`
  text-decoration: none;
  color: #232733;
  float: right;
  position: relative;
  top: 12px;
`;
class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            loggedIn: null,
            loading: false,
            error: null,
            initialTab: 'register',
            flash: "",
            userdata: {},
            authtoken: null,
            seperatortext: <p className="tabname">Create a free account to save your progress and briefs</p>,
            currenttab: 'register',
            registererror: ''
        };
    }
    onLogin() {
        console.log('__onLogin__');
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        if (!email || !password) {
            this.setState({
                error: true
            })
        } else {
            // this.setState({ email, password });
            this.handleSignin(email, password);
            // this.onLoginSuccess('form');
        }
    }
    onRegister() {
        console.log('__onRegister__');
        console.log('email: ' + document.querySelector('#email').value);
        console.log('password: ' + document.querySelector('#password').value);
        console.log('verifypassword: ' + document.querySelector('#verifypassword').value);
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        const verifypassword = document.querySelector('#verifypassword').value;
        if (!email) {
            this.setState({
                error: true,
                registererror: 'Email required!'
            })
        } else if (!password || !verifypassword) {
            this.setState({
                error: true,
                registererror: 'Passsword required!'
            })
        } else if (password !== verifypassword) {
            this.setState({
                error: true,
                registererror: 'Passsword does not match!'
            })
        }
        else {
            this.handleSignup(email, password);
            // this.onLoginSuccess('form');
        }
    }
    openModal(initialTab) {
        this.setState({
            initialTab: initialTab
        }, () => {
            this.setState({
                showModal: true,
            })
        });
    }
    onLoginSuccess(method, response) {
        this.closeModal();
        this.setState({
            loggedIn: method,
            loading: false
        })
    }
    onLoginFail(method, response) {
        this.setState({
            loading: false,
            error: response
        })
    }
    onRegisterFail(method, response) {
        this.setState({
            loading: false,
            error: response,
            registererror: 'Email address already in use!'
        })
    }
    startLoading() {
        this.setState({
            loading: true
        })
    }
    finishLoading() {
        this.setState({
            loading: false
        })
    }
    afterTabsChange() {
        this.setState({
            error: null,
            currenttab: (this.state.currenttab == 'register') ? 'login' : 'register',
            seperatortext: (this.state.currenttab == 'register') ? <span>&nbsp;</span> : <p className="tabname">Create a free account to save your progress and briefs</p>,
        });
    }
    closeModal() {
        this.setState({
            showModal: false,
            error: null
        });
    }
    handleSignup = (email, password) => {
        console.log('A form was submitted: ' + JSON.stringify(this.state, 1, 1));
        // e.preventDefault()
        fetch("/user/signup",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({ email, password }),
            })
            .then(res => {
                let status = true;
                if (res.status === 400) {
                    status = false;
                }
                // gelen server cevabini (res) json a cevirelim
                res.json().then(resp => {
                    console.log(status)
                    console.log(resp)
                    if (status == true) {
                        this.setState({ userdata: resp.user, authtoken: resp.token })
                        this.onLoginSuccess('form', null)
                    } else {
                        this.onRegisterFail('form', true)
                    }
                });
            })
    }
    handleSignin = (email, password) => {
        console.log('A form was submitted: ' + JSON.stringify(this.state, 1, 1));
        // e.preventDefault()
        fetch("/user/signin",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({ email, password }),
            })
            .then(res => {
                let status = true;
                if (res.status === 400) {
                    status = false;
                }
                // gelen server cevabini (res) json a cevirelim
                res.json().then(resp => {
                    console.log(status)
                    console.log(resp)
                    if (status == true) {
                        this.setState({ userdata: resp.user, authtoken: resp.token })
                        this.onLoginSuccess('form', null)
                    } else {
                        this.onLoginFail('form', resp.message)
                    }
                });
            })
    }
    render() {
        if (this.state.loggedIn) {
            return (<A>{this.state.userdata.email}</A>)
        } else {
            return (
                <div>
                    <Button onClick={() => this.openModal()}>Save Progress</Button>
                    <ReactModalLogin
                        separator={{ label: this.state.seperatortext }}
                        visible={this.state.showModal}
                        onCloseModal={this.closeModal.bind(this)}
                        loading={this.state.loading}
                        initialTab={this.state.initialTab}
                        error={this.state.error}
                        registerError={{
                            label: this.state.registererror
                        }}
                        tabs={{
                            afterChange: this.afterTabsChange.bind(this),
                        }}
                        startLoading={this.startLoading.bind(this)}
                        finishLoading={this.finishLoading.bind(this)}
                        form={{
                            onLogin: this.onLogin.bind(this),
                            onRegister: this.onRegister.bind(this),
                            loginBtn: { label: 'Sign in' },
                            registerBtn: { label: "Create Account" },
                            registerInputs: [
                                {
                                    containerClass: 'RML-form-group',
                                    label: 'Email',
                                    type: 'email',
                                    inputClass: 'RML-form-control',
                                    id: 'email',
                                    name: 'email',
                                    placeholder: 'you@email.com',
                                },
                                {
                                    containerClass: 'RML-form-group',
                                    label: 'Password',
                                    type: 'password',
                                    inputClass: 'RML-form-control',
                                    id: 'password',
                                    name: 'password',
                                    placeholder: 'Set your password',
                                },
                                {
                                    containerClass: 'RML-form-group',
                                    label: 'Verify password',
                                    type: 'password',
                                    inputClass: 'RML-form-control',
                                    id: 'verifypassword',
                                    name: 'password',
                                    placeholder: 'Verify your password',
                                }
                            ],
                            loginInputs: [
                                {
                                    containerClass: 'RML-form-group',
                                    label: 'Email',
                                    type: 'email',
                                    inputClass: 'RML-form-control',
                                    id: 'email',
                                    name: 'email',
                                    placeholder: 'you@email.com',
                                },
                                {
                                    containerClass: 'RML-form-group',
                                    label: 'Password',
                                    type: 'password',
                                    inputClass: 'RML-form-control',
                                    id: 'password',
                                    name: 'password',
                                    placeholder: 'Set your password',
                                }
                            ],
                        }}
                    />
                </div>
            )
        }
    }
}
export default LoginModal;