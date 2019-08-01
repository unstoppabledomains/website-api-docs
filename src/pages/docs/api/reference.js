import React from 'react'
import Swagger from '../../../components/Swagger'
import Container from '../../../components/Container'
import '../../../styles/_swagger.scss'
import NavBar from '../../../components/NavBar'
import Demo from '../../../components/Demo/Demo'

const Reference = () => (
  <Container style={{display: 'flex'}}>
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
    <Swagger>
      <Demo />
    </Swagger>
  </Container>
)

export default Reference
