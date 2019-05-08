import React, {useEffect} from "react"

const Swagger = () => {
  useEffect(() => {
    window.SwaggerUIBundle({
      dom_id: "#swagger",
      url: "https://unstoppabledomains.com/api/v1/openApi",
    })
  }, [])

  return <div id="swagger" className="Swagger" />
}

export default Swagger
