import React, { useState } from "react"
import styled from "styled-components"
import uuid from "uuid"
import Amplify, { API, graphqlOperation } from "aws-amplify"

import { createBlog } from "../../graphql/mutations"

import {
  Section,
  Form,
  FormInput,
  FormLabel,
  FormItem,
  FormTextarea,
} from "../global"
import { useForm } from "react-hook-form"

const Profile = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = async (data) => {
    const blog = {
      id: uuid(),
      title: data.title,
      url: data.url,
      description: data.description,
    }
    const blogData = await API.graphql(
      graphqlOperation(createBlog, { input: blog })
    )
    console.log(data)
    console.log(blogData)
  }
  console.log(errors)

  return (
    <Section id="profile">
      <h1>Your profile</h1>
      <ul>
        <li>Name: Your name will appear here</li>
        <li>E-mail: And here goes the mail</li>
      </ul>
    </Section>
  )
}

export default Profile
