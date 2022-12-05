import { useEffect } from "react";

import { Card } from "../../components/card";

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/store";
import { Result, Info, RootObject } from "../../types/data";

export function Characters() {
  const dispatch = useDispatch();

  const { results } = useSelector((state: RootState) => state.data);
  const { episode } = useSelector((state: RootState) => state.data);

  console.log(episode)

 
  return (
    <div className="container">
      <div className="flex min-h-screen border-2 mt-4 rounded-lg p-2 flex-wrap  justify-around">
        {results.map((character: Result) => (
          <Card {...character} />
        ))}
      </div>
    </div>
  );
}
