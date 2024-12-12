export default function HomeScreen({ setScreen }) {
  const modsPath = `.minecraft/mods`
  
  return (
    <div className="container text-center">
      <div className="row align-items-center text-center gap-3">
        <h1>MC Launcher</h1>
        <button className="btn btn-success">Play</button>
        <button className="btn btn-warning" onClick={() => setScreen('settings')}>
          Options
        </button>
        <button className="btn btn-warning"onClick={() => window.electronAPI.openFolder(modsPath)}>Manage Mods</button>
        <button className="btn btn-danger">Exit</button>
      </div>
    </div>
  )
}
