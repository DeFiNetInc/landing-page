import { Auth, API, graphqlOperation } from "aws-amplify"
import { createSubscriber } from "../graphql/mutations"
import uuid from "uuid"

export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}
const setUser = (user) =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

const setSubscriber = (subscriber) =>
  window.localStorage.setItem("subscriber", JSON.stringify(subscriber))

export const getSubscriber = () =>
  isBrowser && window.localStorage.getItem("subscriber")
    ? JSON.parse(window.localStorage.getItem("subscriber"))
    : {}

export const handleSubscribe = async (email) => {
  console.log(email)
  const subscriber = {
    id: uuid(),
    email: email,
  }
  console.log(subscriber)
  const subscriberData = await API.graphql(
    graphqlOperation(createSubscriber, { input: subscriber })
  )
  setSubscriber(subscriberData)
}

export const handleLogin = async ({ username, password }) => {
  try {
    const user = await Auth.signIn(username, password)
    setUser(user)
    return user
  } catch (error) {
    console.log("error signing in", error)
    return false
  }
}

export const handleSignup = async ({ username, password, email }) => {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
      },
    })
    setUser(user)

    console.log(user)
  } catch (error) {
    console.log("error signing up:", error)
  }
}

export const handleConfirmSignup = async ({ username, code }) => {
  try {
    await Auth.confirmSignUp(username, code)
  } catch (error) {
    console.log("error confirming sign up", error)
  }
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const isSubscribed = () => {
  const subscriber = getSubscriber()
  return !!subscriber.email
}
export const logout = async (callback) => {
  try {
    await Auth.signOut()
  } catch (error) {
    console.log("error signing out: ", error)
  }
  setUser({})
  callback()
}
