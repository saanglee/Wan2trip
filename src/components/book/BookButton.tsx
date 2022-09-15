import React from 'react';
import { Hotel } from 'types/types';
import { useConfirm } from '../../hooks/useConfirm';
import ConfirmContent from '../result/ConfirmContent';
import { Confirm } from '../../common/Confirm';
import { useSetRecoilState } from 'recoil';
import { IsBookedButton } from 'store/global';

interface PropsType {
  newHotel: Hotel;
  isBooked: boolean;
}

const BookedHotels: Hotel[] = [];

const BOOK_HOTEL = true;
const CANCEL_HOTEL = false;

const BookButton = ({ newHotel, isBooked }: PropsType) => {
  const setIsBooked = useSetRecoilState(IsBookedButton);
  const { isShown, toggle } = useConfirm();
  const modalContent = <ConfirmContent {...newHotel} />;
  const changeModal = (isBooked: boolean) => {
    if (isBooked) {
      setIsBooked(BOOK_HOTEL);
      toggle();
    }
    if (!isBooked) {
      setIsBooked(CANCEL_HOTEL);
      toggle();
    }
  };

  const handleClickBook = (newHotel: Hotel) => {
    const isExisting = BookedHotels.some(
      (e) => e.hotel_name === newHotel.hotel_name
    );
    if (isExisting) {
      alert('이미 저장된 호텔입니다.');
      return;
    }
    if (!isExisting) {
      BookedHotels.push(newHotel);
      changeModal(BOOK_HOTEL);
    }
    localStorage.setItem('hotels', JSON.stringify(BookedHotels));
  };

  const handleClickCancel = React.useCallback((targetHotel: Hotel) => {
    const localHotelData = JSON.parse(localStorage.getItem('hotels')!) ?? [];
    const newBookedHotels = localHotelData.filter(
      (hotel: Hotel) => hotel.hotel_name !== targetHotel.hotel_name
    );
    localStorage.setItem('hotels', JSON.stringify(newBookedHotels));
    changeModal(CANCEL_HOTEL);
  }, []);

  return (
    <>
      <div>
        {isBooked ? (
          <button
            className="self-end w-24 h-10 mt-2 text-base font-bold text-center text-white rounded bg-main hover:shadow-md"
            onClick={() => handleClickCancel(newHotel)}
          >
            예약 취소
          </button>
        ) : (
          <button
            className="self-end w-24 h-10 mt-2 text-base font-bold text-center text-white rounded bg-main hover:shadow-md"
            onClick={() => handleClickBook(newHotel)}
          >
            예약하기
          </button>
        )}
      </div>
      <Confirm
        isShown={isShown}
        hide={toggle}
        modalContent={modalContent}
        headerText="예약 완료!"
      />
    </>
  );
};

export default BookButton;
