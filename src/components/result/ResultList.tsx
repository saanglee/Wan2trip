import VirtualScroll from 'common/VirtualScroll';
import React, { useEffect, useRef, useCallback, RefObject } from 'react';
import Card from '../../common/Card';
import { useRecoilValue } from 'recoil';
import { PeopleNumber, SearchValue } from 'store/search';
import { useSearchResults } from 'api/queries';
import { changeInfiniteScrollDataToArray } from '../../utils/changeInfiniteScrollDataToArray';
import { Hotel } from 'types/types';
import Noreserve from '../../static/image/Noreserve.png';
import Spinner from '../../static/icons/spinner.png';

const ResultList = () => {
  const searchKeyword = useRecoilValue(SearchValue);
  const numberOfPeople = useRecoilValue(PeopleNumber);
  const {
    data: searchHotels,
    isFetchingNextPage,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isRefetching,
  } = useSearchResults(searchKeyword, numberOfPeople);
  const searchList = changeInfiniteScrollDataToArray(searchHotels) as Hotel[];

  const observationTarget = React.useRef<HTMLImageElement>(null);
  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [hasNextPage, fetchNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    const target = observationTarget.current as HTMLImageElement;
    if (!target) return;

    const option = { threshold: 0 };
    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(target);
    return () => observer.unobserve(target);
  }, [fetchNextPage, isFetchingNextPage, handleObserver]);

  return (
    <div>
      {isLoading && (
        <div className="flex justify-center w-full h-full item-center">
          <img src={Spinner} alt="로딩중 스피너" className="animate-spin" />
        </div>
      )}
      {isLoading || (
        <ResultListContent
          target={observationTarget}
          searchList={searchList}
          isRefetching={isRefetching}
        />
      )}
    </div>
  );
};

export default ResultList;

const ResultListContent = ({
  target,
  searchList,
  isRefetching,
}: {
  target: RefObject<HTMLImageElement>;
  searchList: Hotel[];
  isRefetching: boolean;
}) => {
  return (
    <>
      {isRefetching && (
        <div className="flex justify-center w-full h-full item-center">
          <img src={Spinner} alt="로딩중 스피너" className="animate-spin" />
        </div>
      )}
      {searchList.length === 0 && (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <img src={Noreserve} alt="예약없음" className="mb-10 w-28" />
          <div>검색 결과가 없습니다.</div>
        </div>
      )}
      {searchList.length > 0 && (
        <>
          <VirtualScroll itemHeight={20} columnGap={1.25} renderAhead={10}>
            {searchList.map((result: Hotel) => {
              return (
                <div key={result.hotel_name} className="w-full">
                  <Card data={result} isBooked={false} />
                </div>
              );
            })}
          </VirtualScroll>
          <div className="flex justify-center w-full h-full item-center">
            <img
              src={Spinner}
              ref={target}
              alt="로딩중 스피너"
              className="animate-spin"
            />
          </div>
        </>
      )}
    </>
  );
};
