import React from 'react';
import tw from 'tailwind-styled-components';
import { ReactComponent as CalendarIcon } from '../../static/image/Calendar.svg';
import { Modal } from '../../common/Modal';
import { useModal } from '../../hooks/useModal';
import { Calender } from '../calender/Calender';
import { useRecoilState, useRecoilValue } from 'recoil';
import { format, add } from 'date-fns';
import { pickDateState } from '../../store/global';
import { useHighlightDate } from '../../hooks/useHighlightDate';
const CalendarInput = () => {
  const [pick, setPick] = useRecoilState(pickDateState);
  const { highlightedArray } = useHighlightDate();
  const { isShown, toggle } = useModal();
  const content = <Calender />;
  return (
    <>
      <CalendarBox onClick={toggle}>
        <CalendarIcon className="hidden w-6 h-6 ml-4 md:block" />
        <div className="flex flex-row h-full item-center md:pl-4 md:w-1/2">
          <div className="self-center">
            <span className="hidden text-xs text-slate-400 md:block">
              체크인
            </span>
            <strong className="whitespace-nowrap">
              {pick.startDate
                ? format(pick.startDate, 'M월 d일')
                : format(new Date(), 'M월 d일')}
            </strong>
          </div>
        </div>
        <span className="hidden block w-10 text-sm text-slate-400 md:block">
          {highlightedArray.length > 1 ? highlightedArray.length - 1 : 0}박
        </span>
        <p className="md:hidden text-main">~</p>
        <div className="flex flex-row justify-end h-full item-center md:px-3 md:w-1/2">
          <div className="self-center">
            <span className="hidden text-xs text-slate-400 md:block">
              체크아웃
            </span>
            <strong className="whitespace-nowrap">
              {pick.startDate
                ? pick.endDate
                  ? format(pick.endDate, 'M월 d일')
                  : format(add(pick.startDate, { days: 1 }), 'M월 d일')
                : format(add(new Date(), { days: 1 }), 'M월 d일')}
            </strong>
          </div>
        </div>
      </CalendarBox>
      <Modal
        isShown={isShown}
        hide={toggle}
        modalContent={content}
        // headerText={`${format(new Date(), "yyyy년 M월 d일 h시")}`}
      />
    </>
  );
};

export default CalendarInput;

const CalendarBox = tw.div`
flex flex-1 flex-col  md:flex-row items-center  relative h-full bg-white border-none md:border-r md:border-solid md:border-gray-300 transition-all  cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-400 hover:bg-gray-100`;
