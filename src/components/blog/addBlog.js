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

const AddBlog = () => {
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
    <Section id="addBlog">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormItem>
          <FormLabel for="title">Title</FormLabel>
          <FormInput
            type="text"
            placeholder="title"
            name="title"
            ref={register({ required: true })}
          />
        </FormItem>
        <FormItem>
          <FormLabel for="url">Blog URL</FormLabel>
          <FormInput
            type="url"
            placeholder="url"
            name="url"
            ref={register({ required: true })}
          />
        </FormItem>
        <FormItem>
          <FormLabel for="description">Description</FormLabel>
          <FormTextarea name="description" placeholder="Write a short description of your blog" ref={register} />
        </FormItem>
        <FormInput type="submit" />
      </Form>
    </Section>
  )
}

export default AddBlog
