import React from 'react'
import Swagger from '../../../components/Swagger'
import Container from '../../../components/Container'
import '../../../styles/_swagger.scss'
import NavBar from '../../../components/NavBar'

const Reference = () => (
	<Container style={{ display: 'flex' }}>
		<div
			style={{
				flexBasis: '10rem',
				position: 'sticky',
				top: 0,
				// padding: "2rem 0",
				height: '66.6667vh',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
			}}
		>
			<NavBar />
		</div>
		<Swagger />
	</Container>
)

export default Reference
