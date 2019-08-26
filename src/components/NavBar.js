import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

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

	const navObject = data.allMarkdownRemark.edges
		.map(edge => {
			const {
				node: {
					fields: { slug },
					frontmatter: { navTitle: title, navGroup: group, navIndex: index },
				},
			} = edge
			return { slug, title, group, index }
		})
		.reduce((a, { slug, title, group, index }) => {
			if (!title || !group || index === undefined) return a
			a[group] = a[group] || []
			a[group][index] = { title, slug }
			return a
		}, {})

	navObject.API = [
		{ title: "OpenAPI", slug: "/docs/api/reference/" },
		//
	]

	navObject.Demos = [
		...navObject.Demos,
		{ title: "Resolution", slug: "http://unstoppabledomains.github.io/namicorn-searchbar/", exact: true },
		{ title: "Reseller", slug: "http://unstoppabledomains.github.io/reseller-demo/", exact: true },
	]


	// return <pre>{JSON.stringify(navObject, null, 2)}</pre>

	// Sort the navbar to be in this order Overview -> Demos -> Namicorn -> API
	// eslint-disable-next-line
	const GroupsInOrder = Object.keys(navObject).sort((a, b) => {
		const order = ['Overview', 'Demos', 'Quickstart', 'Namicorn', 'API'];
		return order.indexOf(a) - order.indexOf(b);
	}
	);

	return (
		<>
			{GroupsInOrder.map(group => (
				<div key={group}>
					<h6 className="heading-6" style={{ marginTop: "1rem" }}>
						{group}
					</h6>
					{navObject[group].map(({ title, slug, ...rest }, index) => (
						rest.exact ? <a key={index} href={slug} style={{
							display: "block",
							// marginLeft: "1rem",
							marginTop: ".25em",
							color: "#36f"
						}}>{title}</a> :
							<Link key={index}
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
