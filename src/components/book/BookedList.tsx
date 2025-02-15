import React from 'react';
import { Hotel } from 'types/types';
import BookedPc from './BookedPC';
import BookedMobile from './BookedMobile';

const BookedList = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [localHotelData, setLocalHotelData] = React.useState<Hotel[]>([]);

  React.useEffect(() => {
    const localHotelData = JSON.parse(localStorage.getItem('hotels')!) ?? [];
    const timer = setTimeout(() => {
      setLocalHotelData(localHotelData as Hotel[]);
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:block md:hidden">
        <BookedPc hotel={localHotelData} isLoading={isLoading} />
      </div>
      <div className="md:block bolck lg:hidden">
        <BookedMobile hotel={localHotelData} isLoading={isLoading} />
      </div>
    </>
  );
};

export default BookedList;
