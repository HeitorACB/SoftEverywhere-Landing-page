const InputHeader = () => {
  return (
    <div className='max-w-[1200px] mx-auto ps-8 mt-4 flex items-center'>
      <div>
        <input
          className='bg-graylight p-4 pe-0 rounded-full lg:pe-48'
          type='text'
          placeholder='Infrara favis.'
        />
      </div>
      <div className='bg-Bluelight rounded-full ms-1 lg:hidden hover:bg-BluelightHover'>
        <img className='p-4 ' src='Images/Hero/arrow-right.svg' alt='arrow-right' />
      </div>
      <div className='hidden lg:flex bg-Bluelight rounded-full ms-4 hover:bg-BluelightHover'>
        <button className='group text-BluePrimary font-medium leading-5 p-5 flex gap-2 items-center relative overflow-hidden'>
          Lets Talk
          <img
            className='transition-all duration-2000 ease-in-out inline-block opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-full w-5'
            src='Images/Hero/phone-hero.svg'
            alt='phone-hero'
          />
        </button>
      </div>
    </div>
  )
}

export default InputHeader
