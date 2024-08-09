import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [clickEvent, setClickEvent] = useState(0)
  const handleMouseDown = e => {
    setClickEvent(e)
  }
  const handleContextMenu = e => {
    // Disable context menu
    e.preventDefault()
  }
  useEffect(() => {
    // Disable back button and forward button
    history.pushState(null, document.title, location.href)
    window.addEventListener('popstate', () => {
      history.pushState(null, document.title, location.href)
    })
  }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-dvh'>
        <h1 className="text-3xl font-bold">Mouse Tester</h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow-lg w-full md:w-auto" onMouseDown={handleMouseDown} onContextMenu={handleContextMenu}>Click me</button>
        <p>Clicked button: {clickEvent.button}</p>
      </div>
    </>
  )
}

export default App
