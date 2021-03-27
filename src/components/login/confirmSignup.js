import React from "react"
import { navigate } from "gatsby"
import { handleSignup, isLoggedIn } from "../../services/auth"
class ConfirmSignup extends React.Component {
  state = {
    username: ``,
    password: ``,
    email: "",
  }
  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    handleSignup(this.state)
  }
  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }
    return (
      <>
        <h1>Confirm Signup</h1>
        <form
          method="post"
          onSubmit={(event) => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
        >
          <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Password
            <input type="password" name="password" onChange={this.handleUpdate} />
          </label>
          <label>
            Email
            <input type="email" name="email" onChange={this.handleUpdate} />
          </label>
          <input type="submit" value="Sign Up" />
        </form>
      </>
    )
  }
}
export default ConfirmSignup
