export default function Status({ lastClicked, buttonCounts }) {
  return (
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
  )
}