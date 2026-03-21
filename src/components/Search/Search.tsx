'use client';

import { useRouter } from 'next/navigation';
import { ChangeEvent, FC } from 'react';

type Props = {
  roomTypeFilter: string;
  setRoomTypeFilter: (value: string) => void;
};

const Search: FC<Props> = ({
  roomTypeFilter,
  setRoomTypeFilter,
}) => {
  const router = useRouter();

  const handleRoomTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}`);
  };

  return (
    <section className='bg-tertiary-light px-4 py-6 rounded-lg mt-8'>
      <div className='container mx-auto flex gap-4 flex-wrap justify-between items-end'>

        {/* FILTRO DE ACOMODAÇÃO */}
        <div className='w-full md:w-1/3 lg:w-auto'>
          <label className='block text-sm font-medium mb-2 text-black'>
            Acomodações
          </label>

          <select
            value={roomTypeFilter}
            onChange={handleRoomTypeChange}
            className='w-full px-4 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none'
          >
            <option value='all'>Tudo</option>
            <option value='quarto_independente'>Quarto independente</option>
            <option value='casa'>Casa com área social coletiva</option>
            <option value='casa_privativa'>Casa com área social privativa</option>
          </select>
        </div>

        {/* BOTÃO */}
        <button
          className='btn-primary'
          type='button'
          onClick={handleFilterClick}
        >
          Pesquisar
        </button>

      </div>
    </section>
  );
};

export default Search;