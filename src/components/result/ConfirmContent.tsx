import React from 'react';
import { useRecoilValue } from 'recoil';
import { IsBookedButton } from 'store/global';
import { Hotel } from 'types/types';

const Confirm = (newHotel: Hotel) => {
  const isBooking = useRecoilValue(IsBookedButton);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full pt-10 pb-5 text-center border-b">
        <p className="text-2xl">{newHotel.hotel_name}</p>
        <p className="text-gray-400">{newHotel.address}</p>
        {isBooking ? (
          <div className="mt-5 text-sm tracking-wider">
            <div>저장되었습니다.</div>
            <div>예약 페이지로 이동하시겠습니까?</div>
          </div>
        ) : (
          <div className="mt-5 text-base tracking-wider">
            <div>삭제하시겠습니까?</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Confirm;
