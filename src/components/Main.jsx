import ClickTest from "./Main/ClickTest";
import ScrollTest from "./Main/ScrollTest";
import Status from "./Main/Status";

export default function Main({ onMouseDown, onContextMenu, lastClicked, buttonCounts }) {
  return (
    <main className='grid grid-cols-2 grid-rows-2 gap-4'> {/* Two-column layout */}
      <ClickTest onMouseDown={onMouseDown} onContextMenu={onContextMenu} />
      <ScrollTest />
      <Status lastClicked={lastClicked} buttonCounts={buttonCounts} />
    </main>
  )
}