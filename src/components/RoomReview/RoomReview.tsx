'use client';

import axios from 'axios';
import { FC, useEffect, useState } from 'react';

import { Review } from '@/models/review';
import Rating from '../Rating/Rating';

const RoomReview: FC<{ roomId: string }> = ({ roomId }) => {
  const [roomReviews, setRoomReviews] = useState<Review[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get<Review[]>(
          `/api/room-reviews/${roomId}`
        );
        setRoomReviews(data);
      } catch {
        setError(true);
      }
    };

    fetchReviews();
  }, [roomId]);

  if (error) return null;

  return (
    <>
      {roomReviews.map(review => (
        <div
          className='bg-gray-100 dark:bg-gray-900 p-4 rounded-lg'
          key={review._id}
        >
          <div className='font-semibold mb-2 flex'>
            <p>{review.user.name}</p>

            <div className='ml-4 flex items-center text-tertiary-light text-lg'>
              <Rating rating={review.userRating} />
            </div>
          </div>

          <p>{review.text}</p>
        </div>
      ))}
    </>
  );
};

export default RoomReview;