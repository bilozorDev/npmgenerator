import React, { useEffect } from 'react'
import Home from './pages/Home'

const App = () => {
  useEffect(() => {
    document.title = 'NPM command generator for Create-react-app';
  });
  return (
  
    
      <Home/>
    
  )
}

export default App