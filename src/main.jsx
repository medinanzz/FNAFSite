import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { RoutesPage } from './routes/routes'
import { StyleReset } from './styles/globalStyleReset'
import { FooterPage } from './components/footer'
import { Headerpage } from './components/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Headerpage />
      <RoutesPage />
      <StyleReset />
      <FooterPage />
    </HashRouter>
  </StrictMode>,
)
