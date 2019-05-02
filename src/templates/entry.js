import React from "react"
import {Helmet} from "react-helmet"
import {graphql} from "gatsby"
import Container from "../components/Container"
import NavBar from "../components/NavBar"
import '../styles/_all.scss'

const Template = ({data}) => {
  return (
    <>
      <Helmet
        title={`${
          data.markdownRemark.frontmatter.title
        } - Unstoppable Domains Documentation`}
      />
      <Container fluid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            // width: "100%",

            // maxWidth: "100%",
          }}
        >
          <nav
            className="NavMenu"
            style={{
              flexBasis: "10rem",
              // background: "red",
              // display: 'none',
              minWidth: "10rem",
              marginRight: "1rem",
              // paddingLeft: "1rem",
              // order: 1,
            }}
          >
            <div
              style={{
                position: "sticky",
                top: 0,
                padding: "2rem 0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                maxHeight: "85vh",
                height: "85vh",
              }}
            >
              <NavBar />
            </div>
          </nav>
          <div
            style={{
              // flex: 1,
              flexBasis: "37rem",
              width: "100%",
              maxWidth: "37rem",
              padding: "2rem 0 calc(33.3333vh)",
            }}
          >
            <h1 className="heading-2" style={{marginBottom: ".5rem"}}>
              {data.markdownRemark.frontmatter.title}
            </h1>

            {data.markdownRemark.frontmatter.subtitle && (
              <div className="subhead-1" style={{marginBottom: "1rem"}}>
                {data.markdownRemark.frontmatter.subtitle}
              </div>
            )}

            <div
              className="wysiwyg"
              dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}
            />
          </div>
          <div
            className="NavMenu"
            style={{
              // background: "red",
              flexBasis: "10rem",

              // minWidth: "10rem",
              // marginLeft: "-1rem",
            }}
          />
        </div>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Template
