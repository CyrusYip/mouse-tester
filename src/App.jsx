import { useEffect } from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

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
      <div className='flex flex-col items-center justify-between min-h-vh min-h-dvh py-4 text-2xl'> {/* Fixed header/footer, center main */}
        <Header />
        <main className='grid grid-cols-2 grid-rows-2 gap-4'> {/* Two-column layout */}
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold col-start-1 row-start-1' onMouseDown={handleMouseDown} onContextMenu={handleContextMenu}>Click test</button>
          <div className='border h-[112px] px-2 overflow-y-auto col-start-1 row-start-2'>
            <p className='text-center font-semibold text-blue-500'>Scroll test</p>
            <div className='h-[1000px]'></div>
            <p className='text-center font-semibold text-blue-500'>This is the end</p>
          </div>
          {/* Status */}
          <div className='col-start-2 row-start-1 row-span-2'>
            <p>Clicked: {lastClicked}</p>
            <table className='border'>
              <thead>
                <tr>
                  <th scope="col" className='border text-left font-semibold'>Button</th>
                  <th scope="col" className='border text-left font-semibold'>Count</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border' title='Right button on left-handed mouse'>Left</td>
                  <td className='border'>{buttonCounts.left}</td>
                </tr>
                <tr>
                  <td className='border'>Middle</td>
                  <td className='border'>{buttonCounts.middle}</td>
                </tr>
                <tr>
                  <td className='border' title='Left button on left-handed mouse'>Right</td>
                  <td className='border'>{buttonCounts.right}</td>
                </tr>
                <tr>
                  <td className='border'>Back</td>
                  <td className='border'>{buttonCounts.back}</td>
                </tr>
                <tr>
                  <td className='border'>Forward</td>
                  <td className='border'>{buttonCounts.forward}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
