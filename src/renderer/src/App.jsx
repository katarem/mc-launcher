import { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import OptionsScreen from './screens/OptionsScreen'

function App() {
  const [screen, setScreen] = useState('home')

  switch (screen) {
    case 'home':
      return <HomeScreen setScreen={setScreen} />
    case 'settings':
      return <OptionsScreen setScreen={setScreen} />
    default:
      return <HomeScreen setScreen={setScreen} />
  }
}

export default App
