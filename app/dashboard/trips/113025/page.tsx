export default function Page() {
  return (
    <div>
      <header className='text-4xl font-bold text-left'>Mayflower Gulch</header>
      <p className='text-gray-500'>Published October 25, 2025</p>
      <div className='grid grid-cols-2'>
        <ul className='p-6'>
          <li className='p-3'>Date: Some other content to fill this container</li>
          <li className='p-3'>Location:</li>
          <li className='p-3'>Weather:</li>
          <li className='p-3'>Crew:</li>
          <li className='p-3'>Equipment
            <ul>
              <li className='p-3'>Skis/Board:</li>
              <li className='p-3'>Backpack:</li>
            </ul>
          </li>
        </ul>
        <div>
          <img src='/mayflower_gulch.jpg'></img>
        </div>
      </div>
      <h2 className='p-10 text-3xl font-bold text-center'>Trip Overview</h2>
      <p>Here is where I will write about each trip</p>
    </div>
  )
}