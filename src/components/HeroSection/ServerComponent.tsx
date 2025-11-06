import Image from 'next/image';

export const heading1 = (
  <>
    <h1 className='font-heading mb-6'>Pousada<br/>Quinta do Ypuã</h1>
    <p className='text-[#4a4a4a] dark:text-[#ffffffea] mb-12 max-w-lg'>
    Ideal para quem gosta de fugir da rotina e procura um local de paz para descansar e curtir a natureza.
    </p>
    <button className='btn-primary'>Reservar</button>
  </>
);

export const section2 = (
  <div className='md:grid hidden gap-8 grid-cols-1'>
    <div className='rounded-2xl overflow-hidden h-100'>
      <Image
        src='/images/acomodacao-1.jpeg'
        alt='Suíte Com Cozinha e Chalé Família'
        width={700}
        height={700}
        className='img scale-animation'
      />
    </div>

    <div className='grid grid-cols-2 gap-8 h-48'>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/acomodacao-2.jpeg'
          alt='Domo'
          width={700}
          height={700}
          className='img scale-animation'
        />
      </div>
      <div className='rounded-2xl overflow-hidden'>
        <Image
          src='/images/acomodacao-3.jpeg'
          alt='Charrua'
          width={700}
          height={700}
          className='img scale-animation'
        />
      </div>
    </div>
    <br/>
  </div>
);