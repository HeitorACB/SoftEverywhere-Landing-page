import CardsComments from '../../Components/cardsComments'

const SectionComments = () => {
  return (
    <>
      <div className='gap-3 text-center mb-[21px]'>
        <div>
          <h4 className='text-[40px] font-medium capitalize '>Kroser. Vak. Vöherar.Mikrolig. </h4>
        </div>
        <div>
          <p className='text-[18px] font-normal capitalize max-w-[30ch] mx-auto'>
            Use this section to describe your company{' '}
          </p>
        </div>
      </div>
      <div>
        <CardsComments />
      </div>
    </>
  )
}

export default SectionComments
