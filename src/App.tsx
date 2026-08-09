import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from '@/components/Nav'
import ScrollToTop from '@/components/ScrollToTop'
import ErrorBoundary from '@/components/ErrorBoundary'
import RouteFallback from '@/components/RouteFallback'
import Home from '@/pages/Home'

// L'accueil est chargé d'emblée (c'est l'expérience) ; le reste est scindé.
const Track = lazy(() => import('@/pages/Track'))
const Course = lazy(() => import('@/pages/Course'))
const Journey = lazy(() => import('@/pages/Journey'))
const CockpitLab = lazy(() => import('@/pages/CockpitLab'))
const AircraftLab = lazy(() => import('@/pages/AircraftLab'))
const Labs = lazy(() => import('@/pages/Labs'))
const Logbook = lazy(() => import('@/pages/Logbook'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <ScrollToTop />
      <Nav />
      <main id="main">
        <ErrorBoundary>
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/formation/:trackId" element={<Track />} />
              <Route path="/cours/:trackId/:courseId" element={<Course />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/lab" element={<Labs />} />
              <Route path="/lab/cockpit" element={<CockpitLab />} />
              <Route path="/lab/aircraft" element={<AircraftLab />} />
              <Route path="/logbook" element={<Logbook />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </>
  )
}
