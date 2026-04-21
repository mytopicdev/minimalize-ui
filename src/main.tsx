import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './Buttons/Button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <p>testing environment...</p>
      <Button>Test Button</Button>
    </div>
  </StrictMode>,
)
