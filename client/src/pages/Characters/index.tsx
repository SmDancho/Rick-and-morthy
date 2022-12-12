import { Card } from "../../components/card";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { useState, useEffect } from "react";
import { fetchCharacterData } from "../../redux/getCharactersData";

import { RootState } from "../../redux/store";
import { Result, episodeDataRoot, episodeData } from "../../types/data";

import ReactPaginate from "react-paginate";

import axios from "axios";

export function Characters() {
  const dispatch = useAppDispatch();
  const [fecthedEpisodes, setEpisode] = useState<any>([]);

  const [page, setPage] = useState<number>(1);

  const { results } = useSelector((state: RootState) => state.data);
  const { info } = useSelector((state: RootState) => state.data);

  type seletedType = {
    selected: number;
  };

  useEffect(() => {
    dispatch(fetchCharacterData({ page: page }));
  }, [page]);


  return (
    <>
      <div className="container">
        <div className="flex min-h-screen border-2 mt-4 rounded-lg p-2 flex-wrap  justify-around">
          {results.map((character: Result) => (
            <Card key={character.id} {...character} episode={fecthedEpisodes} />
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
            // renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </>
  );
}
