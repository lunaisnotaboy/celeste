import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import React from 'react'

ReactDOM
  .createRoot(document.getElementById('app') as HTMLElement)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
