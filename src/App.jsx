import { useEffect } from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  const [lastClicked, setLastClicked] = useState()
  const [buttonCounts, setButtonCounts] = useState({
    left: 0,
    middle: 0,
    right: 0,
    back: 0,
    forward: 0,
  })
  const buttonMap = {
    0: "left",
    1: "middle",
    2: "right",
    3: "back",
    4: "forward",
  }
  const handleMouseDown = e => {
    const button = buttonMap[e.button.toString()]
    const count = buttonCounts[button]
    setLastClicked(button)
    setButtonCounts({
      ...buttonCounts,
      [button]: count + 1
    })
  }
  const handleContextMenu = e => {
    // Disable context menu
    e.preventDefault()
  }
  useEffect(() => {
    // Avoid changing history when clicking forward/back buttons
    history.pushState(null, document.title, location.href)
    window.addEventListener('popstate', () => {
      history.pushState(null, document.title, location.href)
    })
  }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-between min-h-vh min-h-dvh p-4 text-2xl'> {/* Fixed header/footer, center main */}
        <Header />
        <Main
          onMouseDown={handleMouseDown}
          onContextMenu={handleContextMenu}
          lastClicked={lastClicked}
          buttonCounts={buttonCounts}
        />
        <Footer />
      </div>
    </>
  )
}

export default App
