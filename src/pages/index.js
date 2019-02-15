import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"

export default ({ data }) => (
	<div>
    <h1>Hello gatsby Image!</h1>
    <Img fluid={ data.file.childImageSharp.fluid } />
	</div>
)

export const query = graphql`
  query {
    file(relativePath: {eq: "hero_background.jpg"}) {
      childImageSharp {
        fluid(quality: 80, maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`