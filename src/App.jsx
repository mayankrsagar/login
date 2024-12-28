import { useState } from 'react';

import Login from './components/Login/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SeatSelection /> */}
    <Login />
    </>
  )
}

export default App
