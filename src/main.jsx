import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { RoutesPage } from './routes/routes'
import { StyleReset } from './styles/globalStyleReset'
import { FooterPage } from './components/footer'
import { Headerpage } from './components/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Headerpage />
      <RoutesPage />
      <StyleReset />
      <FooterPage />
    </BrowserRouter>
  </StrictMode>,
)
