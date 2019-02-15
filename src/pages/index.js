import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"

export default ({ data }) => (
	<div>
    <h1>Hello gatsby Image!</h1>
    <Img fluid={ data.heroBackground.childImageSharp.fluid } />
    <Img fluid={ data.kidsTablet.childImageSharp.fluid } />
    <Img fluid={ data.gpiiBackground.childImageSharp.fluid } />
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