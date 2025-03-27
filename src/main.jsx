import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EXList from './apps/EXList'
import './css/index.css'

createRoot(document.getElementById('root')).render(
  <EXList></EXList>
)
