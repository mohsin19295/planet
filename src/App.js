import React from 'react'
import { EarthCanvas, StarCanvas } from './canvas';

function App() {
  const AppStyle = {
    backgroundColor: '#050816',
    position: 'relative',
    height: '100vh',
    zIndex: 0,
  }
  return (
    <div style={AppStyle}>
      <EarthCanvas />
      <StarCanvas />
    </div>
  );
}

export default App;
