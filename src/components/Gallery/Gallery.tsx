import Image from "next/image";

const Gallery = () => {
    return (
        <div className='mx-auto container py-14 h-full'>
            <div className='flex flex-wrap md:-m-2'>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                            alt='gallery'
                            className='img'
                            src='/images/suite-com-cozinha-3.jpeg'
                            width={649}
                            height={408}
                        />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                            alt='gallery'
                            className='img'
                            src='/images/suite-com-cozinha-2.jpeg'
                            width={649}
                            height={408}
                        />
                    </div>
                    <div className='w-full p-1 md:p-2 h-48'>
                        <Image
                            alt='gallery'
                            className='img'
                            src='/images/suite-com-cozinha-1.jpeg'
                            width={649}
                            height={408}
                        />
                    </div>
                </div>
                <div className='flex w-1/2 flex-wrap'>
                    <div className='w-full p-1 md:p-2 h-48'>
                        <Image
                            alt='gallery'
                            className='img'
                            src='/images/cabana-1.png'
                            width={974}
                            height={447}
                        />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                            alt='gallery'
                            className='img'
                            src='/images/cabana-2.jpeg'
                            width={649}
                            height={408}
                        />
                    </div>
                    <div className='w-1/2 p-1 md:p-2 h-48'>
                        <Image
                            alt='gallery'
                            className='img'
                            src='/images/cabana-3.png'
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