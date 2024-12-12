export default function OptionsScreen({ setScreen }) {
  const mcVersion = '1.20.1'
  const ram = '2G'
  return (
    <div>
      <button className="btn btn-warning" onClick={() => setScreen('home')}>
        Home
      </button>
      <h1>Options</h1>
      <ul>
        <li>Minecraft version {mcVersion}</li>
        <li>RAM {ram}</li>
      </ul>
    </div>
  )
}
