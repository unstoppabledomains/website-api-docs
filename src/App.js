import React from 'react'
import './App.css'
import {RedocStandalone} from 'redoc'
import spec from './spec.yaml'

function App() {
  return <RedocStandalone spec={spec} options={{hideDownloadButton: true}} />
}

export default App
