const InputHeader = () => {
  return (
    <div className='ps-5 mt-4 mb-96 flex items-center'>
      <div>
        <input
          className='bg-graylight p-5 pe-0 rounded-full lg:pe-48'
          type='text'
          placeholder='Infrara favis.'
        />
      </div>
      <div className='bg-Bluelight rounded-full ms-1 lg:hidden'>
        <img className='p-5 ' src='Images/arrow-right.svg' alt='' />
      </div>
      <div className='hidden lg:flex bg-Bluelight  rounded-full ms-4'>
        <button className='text-BluePrimary font-medium leading-5 p-6'>Lets Talk</button>
      </div>
    </div>
  )
}

export default InputHeader
