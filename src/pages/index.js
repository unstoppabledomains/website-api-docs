import React from "react"
import {Link, graphql} from "gatsby"
// import { Helmet } from "react-helmet"

import "../styles/_all.scss"
import Container from "../components/Container"
import NavBar from "../components/NavBar"

export default function Index({data}) {
  const {edges: posts} = data.allMarkdownRemark

  return (
    <Container>
      <NavBar />
    </Container>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          # excerpt(pruneLength: 250)
          id
          fields {
            slug
          }
          frontmatter {
            title
            # date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
