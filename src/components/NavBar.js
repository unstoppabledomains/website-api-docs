import React from "react"
import {Link, useStaticQuery, graphql} from "gatsby"

const NavBar = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              navGroup
              navTitle
              navIndex
            }
          }
        }
      }
    }
  `)

  console.log("data", data)

  const navObject = data.allMarkdownRemark.edges
    .map(edge => {
      const {
        node: {
          fields: {slug},
          frontmatter: {navTitle: title, navGroup: group, navIndex: index},
        },
      } = edge
      return {slug, title, group, index}
    })
    .reduce((a, {slug, title, group, index}) => {
      if (!title || !group || index === undefined) return a
      a[group] = a[group] || []
      a[group][index] = {title, slug}
      console.log('eee this is== ', a)
      return a
    }, {})

  console.log(navObject)

  navObject.API = [
    {title: "OpenAPI", slug: "/docs/api/reference/"},
    //
  ]

  // return <pre>{JSON.stringify(navObject, null, 2)}</pre>
  return (
    <>
      {Object.keys(navObject).map(group => (
        <div>
          <h6 className="heading-6" style={{marginTop: "1rem"}}>
            {group}
          </h6>
          {navObject[group].map(({title, slug}) => (
            <Link
              to={slug}
              style={{
                display: "block",
                // marginLeft: "1rem",
                marginTop: ".25em",
                color: "#36f",
              }}
            >
              {title}
            </Link>
          ))}
        </div>
      ))}
    </>
  )
}

export default NavBar
