import {FC} from 'react';

import {Card} from '../../components/cards/CharacterCard';

import {useSelector} from 'react-redux';
import {useAppDispatch} from '../../redux/store';
import {useState, useEffect} from 'react';
import {fetchCharacterData} from '../../redux/getCharactersData';

import {RootState} from '../../redux/store';
import {Result} from '../../types/data';
import {seletedType} from '../../types/data';

import ReactPaginate from 'react-paginate';

export const Characters:FC = () => {
  const dispatch =useAppDispatch();

  const [page, setPage] = useState<number>(1);

  const {results, info} = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacterData({page: page}));
  }, [page]);

  return (
    <div className="container">
      <div className="flex min-h-screen border-2 mt-4 rounded-lg p-2 flex-wrap  justify-around">
        {results.map((character: Result) => (
          <Card key={character.id} {...character} />
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

  );
};
