import { useEffect } from 'react'
import { useState } from 'react'

function App() {
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
    // Disable back button and forward button
    history.pushState(null, document.title, location.href)
    window.addEventListener('popstate', () => {
      history.pushState(null, document.title, location.href)
    })
  }, [])

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-dvh py-4 text-2xl'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded' onMouseDown={handleMouseDown} onContextMenu={handleContextMenu}>Click test</button>
        <table className='border mt-1'>
          <thead>
            <tr>
              <th scope="col" className='border text-left'>Button</th>
              <th scope="col" className='border text-left'>Count</th>
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

        <div className='border h-[100px] mt-8 px-2 overflow-y-auto'>
          <p className='text-center font-bold text-blue-500'>Scroll test</p>
          <div className='h-[1000px]'></div>
          <p className='text-center font-bold text-blue-500'>This is the end</p>
        </div>
      </div>
    </>
  )
}

export default App
