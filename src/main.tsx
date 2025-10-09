import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Nav } from './Nav.tsx'
import './site.css'
import { Amplify } from 'aws-amplify';

// @ts-ignore
import outputs from '../amplify_outputs.json';
import Bio from './components/Bio.tsx'
Amplify.configure(outputs);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        <h1>Michael Phillips</h1>
      </header>
      <Nav />
      <Bio />
      <App />
    </BrowserRouter>

  </StrictMode>,
)
