import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/common/layout/layout"
import Profile from "../components/profile/profile"
import Login from "../components/login/login"
import Signup from "../components/login/signup"
import ConfirmSignup from "../components/login/confirmSignup"
import PrivateRoute from "../components/common/layout/private-route"
const App = () => (
  <Layout>
    <Router>
    <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
      <ConfirmSignup path="/app/confirmSignup" />
    </Router>
  </Layout>
)
export default App