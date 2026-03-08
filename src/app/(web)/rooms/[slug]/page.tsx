'use client';

import useSWR from 'swr';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { LiaFireExtinguisherSolid } from 'react-icons/lia';
import { AiOutlineMedicineBox } from 'react-icons/ai';
import { GiSmokeBomb } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { getRoom } from '@/libs/apis';
import LoadingSpinner from '../../loading';
import HotelPhotoGallery from '@/components/HotelPhotoGallery/HotelPhotoGallery';
import BookRoomCta from '@/components/BookRoomCta/BookRoomCta';
import toast from 'react-hot-toast';
import { getStripe } from '@/libs/stripe';
import RoomReview from '@/components/RoomReview/RoomReview';
import { Room } from '@/models/room';

const RoomDetails = (props: { params: { slug: string } }) => {
  const {
    params: { slug },
  } = props;

  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [adults, setAdults] = useState(1);
  const [noOfChildren, setNoOfChildren] = useState(0);
  const [isBooked, setIsBooked] = useState(false);
  const [bookedDates, setBookedDates] = useState<Date[]>([]);

  const fetchRoom = async () => getRoom(slug);

  const { data: room, error } = useSWR<Room>('/api/room', fetchRoom);

  const calcMinCheckoutDate = () => {
    if (checkinDate) {
      const nextDay = new Date(checkinDate);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay;
    }
    return null;
  };

  const calcNumDays = () => {
    if (!checkinDate || !checkoutDate) return 0;

    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));

    return noOfDays;
  };

  const handleBookNowClick = async () => {
    if (!room) return;

    if (!checkinDate || !checkoutDate)
      return toast.error('Por favor, informe as datas de check-in e check-out');

    if (checkinDate > checkoutDate)
      return toast.error('Por favor, informe uma data válida para o checkout');

    const numberOfDays = calcNumDays();

    const hotelRoomSlug = room.slug.current;

    const stripe = await getStripe();

    try {
      const { data: stripeSession } = await axios.post('/api/stripe', {
        checkinDate,
        checkoutDate,
        adults,
        children: noOfChildren,
        numberOfDays,
        hotelRoomSlug,
      });

      if (stripe) {
        const result = await stripe.redirectToCheckout({
          sessionId: stripeSession.id,
        });

        if (result.error) {
          toast.error('O pagamento falhou');
        }
      }
    } catch (error) {
      console.log('Error: ', error);
      toast.error('Ocorreu um erro');
    }
  };

  useEffect(() => {
    const checkAvailability = async () => {
      if (!room?._id) return;

      if (!checkinDate || !checkoutDate) {
        setIsBooked(false);
        return;
      }

      try {
        const res = await fetch('/api/check-availability', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            roomId: room._id,
            checkinDate,
            checkoutDate,
          }),
        });

        const data = await res.json();

        setIsBooked(!data.available);
      } catch (error) {
        console.error('Erro verificando disponibilidade:', error);
        setIsBooked(false);
      }
    };

    checkAvailability();
  }, [checkinDate, checkoutDate, room]);

  useEffect(() => {
    const fetchBookedDates = async () => {
      if (!room?._id) return;

      try {
        const res = await fetch(`/api/room-bookings?roomId=${room._id}`);
        const data = await res.json();

        const dates: Date[] = [];

        data.bookings.forEach((booking: any) => {
          const start = new Date(booking.checkinDate);
          const end = new Date(booking.checkoutDate);

          for (
            let date = new Date(start);
            date <= end;
            date.setDate(date.getDate() + 1)
          ) {
            dates.push(new Date(date));
          }
        });

        setBookedDates(dates);
      } catch (error) {
        console.error('Erro carregando reservas:', error);
      }
    };

    fetchBookedDates();
  }, [room]);

  if (error) throw new Error('Não foi possivel encontrar o dado.');
  if (!room) return <LoadingSpinner />;

  return (
    <div>
      <HotelPhotoGallery photos={room.images || []} />

      <div className='container mx-auto mt-20'>
        <div className='md:grid md:grid-cols-12 gap-10 px-3'>
          <div className='md:col-span-8 md:w-full'>
            <div>
              <h2 className='font-bold text-left text-lg md:text-2xl'>
                {room.name} ({room.dimension})
              </h2>

              <div className='flex my-11'>
                {(room.offeredAmenities || []).map((amenity) => (
                  <div
                    key={amenity._key}
                    className='md:w-44 w-fit text-center px-2 md:px-0 h-20 md:h-40 mr-3 bg-[#eff0f2] dark:bg-gray-800 rounded-lg grid place-content-center'
                  >
                    <i className={`fa-solid ${amenity.icon} md:text-2xl`}></i>
                    <p className='text-xs md:text-base pt-3'>
                      {amenity.amenity}
                    </p>
                  </div>
                ))}
              </div>

              <div className='mb-11'>
                <h2 className='font-bold text-3xl mb-2'>Descrição</h2>
                <p>{room.description}</p>
              </div>

              <div className='shadow dark:shadow-white rounded-lg p-6'>
                <div className='items-center mb-4'>
                  <p className='md:text-lg font-semibold'>
                    Avaliação dos clientes
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <RoomReview roomId={room._id} />
                </div>
              </div>
            </div>
          </div>

          <div className='md:col-span-4 rounded-xl shadow-lg dark:shadow dark:shadow-white sticky top-10 h-fit overflow-auto'>
            <BookRoomCta
              discount={room.discount}
              price={room.price}
              specialNote={room.specialNote}
              checkinDate={checkinDate}
              setCheckinDate={setCheckinDate}
              checkoutDate={checkoutDate}
              setCheckoutDate={setCheckoutDate}
              calcMinCheckoutDate={calcMinCheckoutDate}
              adults={adults}
              noOfChildren={noOfChildren}
              setAdults={setAdults}
              setNoOfChildren={setNoOfChildren}
              isBooked={isBooked}
              bookedDates={bookedDates}
              handleBookNowClick={handleBookNowClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;