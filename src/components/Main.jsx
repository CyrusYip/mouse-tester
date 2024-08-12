/* eslint-disable react/prop-types */
export default function Main({ onMouseDown, onContextMenu, lastClicked, buttonCounts }) {
  return (
    <main className='grid grid-cols-2 grid-rows-2 gap-4'> {/* Two-column layout */}
      <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold col-start-1 row-start-1' onMouseDown={onMouseDown} onContextMenu={onContextMenu}>Click test</button>
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
  )
}