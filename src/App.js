import React, {Component} from 'react'
import './App.css'
import SwaggerUI from 'swagger-ui'
import Sidebar from './Sidebar.js'
import '../node_modules/swagger-ui/dist/swagger-ui.css'
import spec from './spec.yaml'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      definitionList: [
        {
          name: 'Resellers API v1 (deprecated)',
          deprecated: true,
          url: spec,
        },
        {
          name: 'Resellers API v2',
          url:
            'https://raw.githubusercontent.com/unstoppabledomains/website-api-docs-v2/master/openapi.yaml',
        },
        {
          name: 'Resolution service API',
          url: 'https://resolve.unstoppabledomains.com/api-docs/spec.json',
        },
      ],
    }
    this.updateDefinitionLink = this.updateDefinitionLink.bind(this)
  }

  loadSpec() {
    const specOrUrl =
      typeof this.state.currentDefinition === 'string'
        ? {url: this.state.currentDefinition}
        : {spec: this.state.currentDefinition}
    SwaggerUI({
      domNode: document.getElementById('api-data'),
      ...specOrUrl,
    })
  }

  componentDidMount() {
    this.updateDefinitionLink(
      'https://raw.githubusercontent.com/unstoppabledomains/website-api-docs-v2/master/openapi.yaml',
      1,
    )
  }

  componentDidUpdate() {
    this.loadSpec()
  }

  updateDefinitionLink(newLink, index) {
    this.setState({
      currentDefinition: newLink,
      currentDefinitionIndex: index,
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          definitionList={this.state.definitionList}
          currentDefinitionIndex={this.state.currentDefinitionIndex}
          updateDefinitionLink={this.updateDefinitionLink}
        />
        <div id="api-data" />
      </div>
    )
  }
}

export default App
