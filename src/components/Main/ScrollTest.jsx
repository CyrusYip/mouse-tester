export default function ScrollTest() {
  return (
    <div className='border h-[112px] px-2 overflow-y-auto col-start-1 row-start-2'>
      <p className='text-center font-semibold text-blue-500'>Scroll test</p>
      <div className='h-[1000px]'></div>
      <p className='text-center font-semibold text-blue-500'>This is the end</p>
    </div>
  )
}