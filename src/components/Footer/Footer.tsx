import Link from 'next/link';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className='mt-16'>
            <div className='container mx-auto px-4'>
                <Link href='/' className='font-black text-tertiary-dark'>
                    Quinta do Ypuã
                </Link>

                <h4 className='font-semibold text-[40px] py-6'>Contatos</h4>

                <div className='flex flex-wrap gap-16 items-center justify-between'>
                    <div className='flex-1'>
                        <p>Estrada Ipua, nº 6 Laguna - SC</p>
                        <div className='flex items-center py-4'>
                            <BsFillSendFill />
                            <p className='ml-2'>pousadaquintadoypua@gmail.com</p>
                        </div>
                        <div className='flex items-center'>
                            <BsTelephoneOutbound />
                            <p className='ml-2'>(48) 99940-9732</p>
                        </div>
                        <div className='flex items-center pt-4'>
                            <BiMessageDetail />
                            <p className='ml-2'>SENAISC</p>
                        </div>
                    </div>

                    <div className="flex-1 md:text-right">
                        <p className="pb-4">Nossa loja</p>
                        <p className="pb-4">Entre em contato</p>
                        <p className="pb-4">Acordo de privacidade</p>
                        <p className="pb-4">Termo de serviço</p>
                        <p className="pb-4">Nossa loja</p>
                        <p>Assistência ao Cliente</p>
                    </div>

                    <div className="flex-1 md:text-right">
                        <p className='pb-4'>Experiência Gastronômica</p>
                        <p className='pb-4'>Bem-estar</p>
                        <p className='pb-4'>Saúde</p>
                        <p className='pb-4'>Esportes</p>
                        <p>Eventos</p>
                    </div>
                </div>
            </div>

            <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0' />
        </footer>
    );
};

export default Footer;