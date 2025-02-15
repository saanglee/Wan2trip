import React, { useState } from 'react';

const Tag = () => {
  const [isTagActive, setIsTagActive] = useState(true);
  const tags = [
    '#비지니스',
    '#쇼핑',
    '#가족',
    '#럭셔리',
    '#스파',
    '#반려동물',
    '#시티',
    '#골프',
    '#친환경',
    '#카지노',
    '#자연',
    '#커플',
    '#스키',
    '#고급/럭셔리',
    '#부티크',
    '#가족',
    '#단체/MT/워크샵',
    '#로맨틱',
    '#풀빌라',
    '#한옥',
    '#레지던스',
    '#부티크',
    '#어드벤처',
    '#애견펜션',
    '#와이너리',
  ];
  return (
    <>
      {/* web */}
      <div className="hidden lg:block lg:pr-4">
        <div className="mt-5 mb-5 text-xl font-semibold ">관련태그</div>
        <div className="flex flex-wrap justify-between w-full pb-10 font-semibold border-b-2 text-slate-300 border-slate-200 ">
          {tags.map((tag, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="hidden"
                id="tagActive"
                checked={isTagActive}
                onChange={() => {
                  setIsTagActive(!isTagActive);
                }}
              />
              <label
                htmlFor="tagActive"
                className="checked:border-[#FF375C] checked:text-[#FF375C] checked:bg-[#FEEEF1] 
                flex flex-col items-center justify-center h-12 m-1 border cursor-pointer w-[8.75rem] rounded-3xl border-slate-300 "
              >
                {tag}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* mobile */}
      <div className="flex lg:hidden">
        <div className="fixed flex w-full pt-0 pb-2 pl-2 overflow-x-auto text-sm font-semibold text-black bg-white top-46 md:top-0 md:pt-6 flex-nowrap md:relative dark:bg-gray-600">
          {tags.map((tag, index) => (
            <div key={index}>
              <input
                type="checkbox"
                className="hidden"
                id="tagActive"
                onChange={() => {
                  setIsTagActive(!isTagActive);
                  console.log(isTagActive);
                }}
              />
              <label
                htmlFor="tagActive"
                className="checked:bg-[#686888] checked:text-white
                flex items-center justify-center h-7 m-1 border cursor-pointer py-4 px-4 whitespace-nowrap rounded-3xl bg-[#EEEEEE]"
              >
                {tag}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tag;
