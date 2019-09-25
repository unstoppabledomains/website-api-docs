import React from 'react';
import './App.css';
import { RedocStandalone } from 'redoc';
import spec from './spec.yaml';

function App() {
	return (
		<div className="App">
			<RedocStandalone spec={spec} />
		</div>
	);
}

export default App;
