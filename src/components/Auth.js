import React, { Component } from "react"
import { Formik } from 'formik'


class Auth extends Component {

    state = {
        mode: 'Sign up'
    }

    switchMode = () => {
        this.setState({
            mode: this.state.mode === "Sign Up" ? 'Login' : 'Sign Up'
        })
    }

    render() {
        return (
            <div className="container">
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        passwordConfirm: ""
                    }}

                    onSubmit={(values) => {
                        console.log(values)
                    }
                    }
                >

                    {({ values, handleChange, handleSubmit }) => (<div>
                        <form onSubmit={handleSubmit}>
                            <br />
                            <button style={{
                                width: '100%',
                                backgroundColor: '#570303',
                                color: 'white'
                            }} className="btn btn-class" onClick={this.switchMode}>Switch to {this.state.mode === 'Sign Up' ? "Login" : "Sign up"}</button>
                            <br />
                            <br />

                            <input
                                name="email"
                                placeholder="Enter your email"
                                className="form-control"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <br />
                            <input
                                name="password"
                                placeholder="Password"
                                className="form-control"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <br />
                            {this.state.mode === "Sign Up" ? <div><input name="passwordConfirm" placeholder="Confirm Password" className="form-control"
                                value={values.passwordConfirm}
                                onChange={handleChange} />
                                <span style={{ color: "red" }}>
                                </span>
                                <br /></div> : null}



                            <button type="submit" className="btn btn-success">
                                {this.state.mode === 'Sign Up' ? 'Sign Up' : 'Login'}
                            </button>


                        </form>
                    </div>)}


                </Formik>
            </div>
        )

    }
}

export default Auth