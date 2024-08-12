export default function ClickTest({ onMouseDown, onContextMenu }) {
  return (
    <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold col-start-1 row-start-1' onMouseDown={onMouseDown} onContextMenu={onContextMenu}>Click test</button>
  )
}