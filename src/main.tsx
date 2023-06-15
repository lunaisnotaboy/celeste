import { WindowTitlebar } from '@/components/window-titlebar'
import ReactDOM from 'react-dom/client'
import { App } from '@/App'
import React from 'react'
import '@/style.scss'

ReactDOM
  .createRoot(document.getElementById('app') as HTMLElement)
  .render(
    <React.StrictMode>
      <WindowTitlebar />
      <App />
    </React.StrictMode>
  )
