'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { getRooms } from '@/libs/apis';
import { Room } from '@/models/room';
import RoomCard from '@/components/RoomCard/RoomCard';

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const searchParams = useSearchParams();

  const roomType = searchParams.get('roomType') || 'all';

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getRooms();
        setRooms(data || []);
      } catch (error) {
        console.error('Erro ao buscar quartos:', error);
      }
    };

    fetchRooms();
  }, []);

  // 🔥 FILTRO APLICADO AQUI
  const filteredRooms =
    roomType === 'all'
      ? rooms
      : rooms.filter((room) => room.type === roomType);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <h1 className="text-2xl font-semibold mb-6">
        Acomodações
      </h1>

      {filteredRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredRooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}

        </div>
      ) : (
        <p className="text-center py-10 text-gray-500">
          Nenhuma acomodação encontrada.
        </p>
      )}
    </div>
  );
}