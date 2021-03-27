import React from "react"
import styled from "styled-components"

import { Section, Container, Form, FormInput, FormLabel, FormItem, FormTextarea } from "../global"

const Creators = () => (
  <Section id="creators">
    <StyledContainer>
      <Subtitle>Creators</Subtitle>
      <SectionTitle>Get Your Content Discovered</SectionTitle>
      <Form>
        <FormItem>
          <FormLabel>URL</FormLabel>
          <FormInput placeholder="Where are you creating content?" />
        </FormItem>
        <FormItem>
          <FormLabel>Describe your content</FormLabel>
          <FormTextarea rows="4" placeholder="Tell us a little bit about your content" />
        </FormItem>
      </Form>
    </StyledContainer>
  </Section>
)

export default Creators

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

