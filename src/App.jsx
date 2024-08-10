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
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded shadow-lg' onMouseDown={handleMouseDown} onContextMenu={handleContextMenu}>Click test</button>
        <p>Clicked button: {clickEvent.button}</p>

        <table className='border'>
          <thead>
            <tr>
              <th scope="col" className='border'>Buttons</th>
              <th scope="col" className='border'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border' title='Right button on left-handed mouse'>Left</td>
              <td className='border'>✓</td>
            </tr>
            <tr>
              <td className='border'>Middle</td>
              <td className='border'></td>
            </tr>
            <tr>
              <td className='border' title='Left button on left-handed mouse'>Right</td>
              <td className='border'></td>
            </tr>
            <tr>
              <td className='border'>Back</td>
              <td className='border'></td>
            </tr>
            <tr>
              <td className='border'>Forward</td>
              <td className='border'></td>
            </tr>
          </tbody>
        </table>

        <div className='border h-[100px] mt-8 overflow-y-auto'>
          <p className='text-center font-bold text-blue-500'>Scroll test</p>
          <div className='h-[1000px]'></div>
          <p className='text-center font-bold text-blue-500'>This is the end</p>
        </div>
      </div>
    </>
  )
}

export default App
