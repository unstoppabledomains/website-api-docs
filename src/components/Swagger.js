import React, {useEffect} from "react"

const Swagger = () => {
  useEffect(() => {
    window.SwaggerUIBundle({
      dom_id: "#swagger",
      url: "https://api.unstoppabledomains.com/v1/openapi.json",
    })
  }, [])

  return <div id="swagger" className="Swagger" />
}

export default Swagger
