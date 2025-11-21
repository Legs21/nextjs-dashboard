export default function Page() {
  return (
    <div>
      <header className='text-4xl font-bold text-left'>Mayflower Gulch</header>
      <p className='text-gray-500'>Published October 25, 2025</p>
      <div className='grid grid-cols-2'>
        <ul className='p-6'>
          <li className='p-3'>Date: Some other content to fill this container</li>
          <li className='p-3'>Location: Mayflower Gulch</li>
          <li className='p-3'>Weather: Bluebird Day</li>
          <li className='p-3'>Crew: Peter and myself</li>
          <li className='p-3'>Equipment
            <ul>
              <li className='p-3'>Skis/Board: Arbor Coda</li>
              <li className='p-3'>Backpack: BCA Pro 32L</li>
            </ul>
          </li>
        </ul>
        <div>
          <img src='/mayflower_gulch.jpg'></img>
        </div>
      </div>
      <h2 className='p-10 text-3xl font-bold text-center'>Trip Overview</h2>
      <p>This was my first backcountry excursion ever. We choose a low angle glade that is unlikely to pose avalanche risk.
        There was about 3 ft of new snow in this area from storms the previous week. The snow was almost too deep as you couldn't get
        enough speed to make decent turns. In the trees to the lookers left from the top of the ridge has more variable 
        degrees of slope, allowing you to take advantage of brief steeper sections to maintain speed and make decent turns.
      </p>
    </div>
  )
}