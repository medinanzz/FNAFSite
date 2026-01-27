import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { RoutesPage } from './routes/routes'
import { StyleReset } from './styles/globalStyleReset'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <RoutesPage />
      <StyleReset />
    </HashRouter>
  </StrictMode>,
)
