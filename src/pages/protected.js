import { withAuthenticator } from "aws-amplify-react"
import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Creators from "../components/sections/creators"
import AddBlog from "../components/blog/addBlog"

const ProtectedPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <AddBlog />
    <Footer />
  </Layout>
)

export default withAuthenticator(ProtectedPage)