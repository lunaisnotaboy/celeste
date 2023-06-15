import styles from '@/components/window-titlebar/style.module.scss'
import { appWindow } from '@tauri-apps/api/window'
import React from 'react'

export const WindowTitlebar: React.FC = () => (
  <div className={styles.titlebar} data-tauri-drag-region>
    <div id='titlebar-minimize' className={styles.titlebarButton}>
      <img
        alt='Minimize'
        src='https://api.iconify.design/mdi:window-minimize.svg'
      />
    </div>

    <div id='titlebar-maximize' className={styles.titlebarButton}>
      <img
        alt='Maximize'
        src='https://api.iconify.design/mdi:window-maximize.svg'
      />
    </div>

    <div id='titlebar-close' className={styles.titlebarButton}>
      <img
        alt='Close'
        src='https://api.iconify.design/mdi:close.svg'
      />
    </div>
  </div>
)

document
  .getElementById('titlebar-minimize')!
  .addEventListener('click', () => appWindow.minimize())

document
  .getElementById('titlebar-maximize')!
  .addEventListener('click', () => appWindow.toggleMaximize())

document
  .getElementById('titlebar-close')!
  .addEventListener('click', () => appWindow.close())
