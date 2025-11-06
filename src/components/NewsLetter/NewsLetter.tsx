const NewsLetter = () => {
  return (
    <section className='container mx-auto px-4'>
      <form className='bg-[#4E2924] text-white px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-24'>
        <p className='md:font-semibold text-lg md:text-xl text-center mb-3'>
        Conheça mais sobre a nossa pousada!
        </p>
        <h6 className='md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center'>
        Aproveite, crie o seu cadastro <br/> e fique sabendo de todas as nossas novidades.
        </h6>

        <div className='flex-col justify-center w-full md:flex-row flex pt-12'>
          <input
            type='email'
            placeholder='Digite o seu email'
            className='bg-[#a88d76] md:font-semibold font-medium h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none'
          />
          <button type='button' className='btn-tertiary'>
          Inscreva-se!
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewsLetter;
