import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AgeCalculator from './components/AgeCalculator/AgeCalculator'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AgeCalculator/>
  </StrictMode>,
)
