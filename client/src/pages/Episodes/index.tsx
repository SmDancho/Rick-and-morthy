
import ReactPaginate from 'react-paginate';

import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../redux/store';

import {fetchEpisodesData} from '../../redux/getEpisodesData';
import {seletedType} from '../../types/data';
import {RootState} from '../../redux/store';
import React from 'react';
import {EpisodeCard} from '../../components/cards/episodesCard';


export function Episodes() {
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchEpisodesData({page}));
  }, [page]);

  const {results, info} = useSelector(
      (state: RootState) => state.episodes,
  );


  return (
    <>
      <>

        <div className="container">
          <div className="flex min-h-screen border-2 mt-4 rounded-lg p-2 flex-wrap  justify-around">
            {results.map((episodes) => (
              <EpisodeCard key={episodes.id} {...episodes} />
            ))}
          </div>
          <div className="flex pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={(e: seletedType) => {
                setPage(e.selected + 1);
              }}
              pageRangeDisplayed={5}
              pageCount={info.pages}
              previousLabel="<"
            />
          </div>
        </div>

      </>
    </>
  );
}
