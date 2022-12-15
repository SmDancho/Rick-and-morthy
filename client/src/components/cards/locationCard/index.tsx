import {Result} from '../../../types/data';
import React from 'react';

export function LocationCard(props: Result) {
  return (
    <>
      <div className="w-96 h-56 border-2 rounded-xl flex mb-4 ">
        <div className="flex flex-col justify-around ml-4">
          <div className="font-bold text-2xl">{props.name}</div>
          <div className="flex items-center ">
            <div className={`w-2 h-2  rounded-full`}></div>
            <div className="ml-2">{props.status}</div>
          </div>
          <div>
            <div className="text-sm">
              Type: {props.type}
              <span className="font-bold">{props.location?.name}</span>
            </div>
            <div className="text-sm">dimension: <span className="font-bold">{props.dimension}</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
