import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Tools For Creators</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Banking</FeatureTitle>
          <FeatureText>
            Connect your own bank account or use one of ours
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Build your Audience</FeatureTitle>
          <FeatureText>
            We help you analyze the performance of your content and connect you to your audience.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Focus</FeatureTitle>
          <FeatureText>
            You focus on your content. We help you make money from it.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Choose your Platforms</FeatureTitle>
          <FeatureText>
            You create your content anywhere you want.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Payments</FeatureTitle>
          <FeatureText>Easily accept payments</FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Deals</FeatureTitle>
          <FeatureText>
            We are partnering with companies that provide you the products and services you need to create your content.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
