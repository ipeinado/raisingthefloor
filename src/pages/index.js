import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import morphicLogo from "../images/animated-morphic-logo.svg"

export default ({ data }) => (
	<div>
    <h1>Hello gatsby Image!</h1>

    <BackgroundImage Tag="section" fluid={ data.heroBackground.childImageSharp.fluid } >
      <h1 style={{ color: `#fff`, }}>Testing Background Images</h1>
    </BackgroundImage>

    <Img fluid={ data.kidsTablet.childImageSharp.fluid } />

    <Img fluid={ data.gpiiBackground.childImageSharp.fluid } />

    <img src={ morphicLogo } alt="Morphic Logo" />
	</div>
)

export const query = graphql`
  query {
    heroBackground: file(relativePath: {eq: "hero_background.jpg"}) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    kidsTablet: file(relativePath: {eq: "kids_tablet.jpg"}) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 420) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    gpiiBackground: file(relativePath: {eq: "gpii_background.jpg"}) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`