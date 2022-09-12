import React from 'react';
import { getMonth, getYear } from 'date-fns';
import { months, daysShort } from '../../static/constant/calenderValues';
import { uid } from 'react-uid';

type TableType = {
  today: Date;
};

const CalenderHeader = (props: TableType) => {
  return (
    <>
      <button className="pb-5 text-xl font-extrabold font-redHat">
        {getYear(props.today)} {months[getMonth(props.today)]}
      </button>

      <div className="w-full mx-auto text-center font-redHat ">
        <div className="flex w-full mx-auto justify-evenly ">
          {daysShort.map((day, i) => (
            <div key={uid(i)}>
              <div className="py-1 text-sm text-gray-400 w-11">{day}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalenderHeader;
