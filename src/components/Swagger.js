import React, {useEffect} from 'react'

const Swagger = ({...props}) => {
  console.log('swagger.props = ', props)
  useEffect(() => {
    window.SwaggerUIBundle({
      dom_id: '#swagger',
      url: 'https://unstoppabledomains.com/api/v1/openApi',
      //url: "http://localhost:8080/api/v1/openApi",
    })
  }, [])

  return (
    <div id="main-wrapper">
      <div id="swagger" className="Swagger">
        {' '}
      </div>
      {props.children}
    </div>
  )
}

export default Swagger
