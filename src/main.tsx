import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Nav } from './Nav.tsx'
import './site.css'
import { Amplify } from 'aws-amplify';
// @ts-ignore
import outputs from '../amplify_outputs.json' ;
Amplify.configure(outputs);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
  
      <h1>Music Player Experiment</h1>
      <Nav />
      <App />

     </BrowserRouter>
   
  </StrictMode>,
)
