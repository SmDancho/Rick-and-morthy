import {} from "../../components/cards/CharacterCard";
import ReactPaginate from "react-paginate";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";

import { fetchLocationData } from "../../redux/getLocationData";
import { seletedType } from "../../types/data";
import { RootState } from "../../redux/store";

import { LocationCard } from "../../components/cards/locationCard";

export function Locations() {
  const [page, setPage] = useState<number>(1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchLocationData({ page }));
  }, [page, dispatch]);

  const { info, Locationresults } = useSelector((state: RootState) => state.locations);

  return (
    <>
      <>
        <div className="container">
          <div className="flex min-h-screen border-2 mt-4 rounded-lg p-2 flex-wrap  justify-around">
            {Locationresults.map((location) => (
              <LocationCard  key={location.id} {...location} />
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
    </>
  );
}
