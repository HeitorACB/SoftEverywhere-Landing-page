const CardsComments = () => {
  return (
    <div className='flex overflow-x-auto max-w-[1200px] mx-auto lg:ps-8'>
      <div className='flex-none mr-4'>
        <div className='cardActive max-w-[343px] h-[399px] rounded-[30px] mx-auto  '>
          <div className='ps-8 pt-8 gap-5 flex'>
            <div>
              <img src='Images/CardsComments/card1.jpg' alt='' />
            </div>
            <div className='gap-3'>
              <h4 className='text-[28px] font-black capitalize'>Amelia Joseph</h4>
              <h5 className='text-[20px] font-medium capitalize '>chief Manager</h5>
            </div>
          </div>
          <p className='pt-8 ps-8 max-w-[28ch] mx-auto text-[18px] leading-8'>
            Use this section to describe your company and the products you offer. You could share
            your companys story and details about why you are in business.{' '}
          </p>
        </div>
      </div>
      <div className='flex-none mr-4'>
        <div className='cardActive max-w-[343px] w-[343px] h-[399px] rounded-[30px] mx-auto '>
          <div className='ps-8 pt-8 gap-5 flex'>
            <div>
              <img src='Images/CardsComments/card2.jpg' alt='' />
            </div>
            <div className='gap-3'>
              <h4 className='text-[28px] font-black capitalize'>
                Jacob <br /> Joshua
              </h4>
              <h5 className='text-[20px] font-medium capitalize '>chief Manager</h5>
            </div>
          </div>
          <p className='pt-8 ps-8 max-w-[28ch] mx-auto text-[18px] leading-8'>
            Use this section to describe your company and the products you offer. You could share
            your companys story and details about why you are in business.{' '}
          </p>
        </div>
      </div>
      <div className='flex-none mr-4'>
        <div className='cardActive max-w-[343px] w-[343px] h-[399px] rounded-[30px] mx-auto '>
          <div className='ps-8 pt-8 gap-5 flex'>
            <div>
              <img src='Images/CardsComments/card3.jpg' alt='' />
            </div>
            <div className='gap-3'>
              <h4 className='text-[28px] font-black capitalize'>
                Joshua <br />
                Jacob{' '}
              </h4>
              <h5 className='text-[20px] font-medium capitalize '>chief Manager</h5>
            </div>
          </div>
          <p className='pt-8 ps-8 max-w-[28ch] mx-auto text-[18px] leading-8'>
            Use this section to describe your company and the products you offer. You could share
            your companys story and details about why you are in business.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardsComments
