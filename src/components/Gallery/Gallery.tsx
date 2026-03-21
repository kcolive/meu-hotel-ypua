import Image from "next/image";

const Gallery = () => {
    return (
        <div className='mx-auto container py-14 h-full'>
            <div className='flex flex-wrap md:-m-2'>

                {/* LADO ESQUERDO */}
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                            alt='Villa Daniella'
                            className='img object-cover w-full h-full'
                            src='/images/casa_pe_na_areia_1.webp'
                            width={649}
                            height={408}
                        />
                    </div>

                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                            alt='Villa Daniella'
                            className='img object-cover w-full h-full'
                            src='/images/casa_pe_na_areia_3.webp'
                            width={649}
                            height={408}
                        />
                    </div>

                    <div className='w-full p-1 md:p-2 h-48'>
                        <Image
                            alt='Villa Daniella'
                            className='img object-cover w-full h-full'
                            src='/images/casa_pe_na_areia_4.webp'
                            width={649}
                            height={408}
                        />
                    </div>
                </div>

                {/* LADO DIREITO */}
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-full p-1 md:p-2 h-48'>
                        <Image
                            alt='Villa Daniella'
                            className='img object-cover w-full h-full'
                            src='/images/casa_pe_na_areia_6.webp'
                            width={974}
                            height={447}
                        />
                    </div>

                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                            alt='Villa Daniella'
                            className='img object-cover w-full h-full'
                            src='/images/area_externa_villa_santuário3 (2).webp'
                            width={649}
                            height={408}
                        />
                    </div>

                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                            alt='Villa Daniella'
                            className='img object-cover w-full h-full'
                            src='/images/area_externa_villa_santuario.webp'
                            width={649}
                            height={408}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Gallery;