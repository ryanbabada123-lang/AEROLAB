/** État de chargement de route — sobre, jamais un écran blanc (§51.3). */
export default function RouteFallback() {
  return (
    <div className="route-fallback" role="status" aria-live="polite">
      <span className="u-label">Chargement</span>
      <span className="route-fallback__bar">
        <i />
      </span>
    </div>
  )
}
