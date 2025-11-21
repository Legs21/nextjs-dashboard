export default function Page() {
  return (
    <div>
      <header className='text-4xl font-bold text-left'>Avalanche Course Day 1</header>
      <p className='text-gray-500'>Published November 21, 2025</p>
      <div className='grid grid-cols-2'>
        <ul className='p-6'>
          <li className='p-3'>Date: Jan 2, 2025</li>
          <li className='p-3'>Location: Hoosier Pass</li>
          <li className='p-3'>Weather: Overcast with light snow, developing into partly sunny clouds</li>
          <li className='p-3'>Crew: Peter, Carter, Mia (our guide/teacher) and myself</li>
          <li className='p-3'>Equipment
            <ul>
              <li className='p-3'>Skis/Board: Arbor Veda Splitboard</li>
              <li className='p-3'>Bindings: Arc Surge Pro Splitboard Bindings</li>
              <li className='p-3'>Backpack: Backcountry Access 32L Pro</li>
            </ul>
          </li>
        </ul>
        <div className=''>
          <img className='max-h-96' src=''></img>
        </div>
      </div>
      <h2 className='p-10 text-3xl font-bold text-center'>Trip Overview</h2>
      <p>Here is where I will write about each trip</p>
    </div>
  )
}