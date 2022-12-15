import {Result} from '../../../types/data';

export function EpisodeCard(props: Result) {
  return (
    <div className="w-96 h-56 border-2 rounded-xl flex mb-4 ">
      <div className="flex flex-col justify-around ml-4">
        <div className="font-bold text-2xl">{props.name}</div>
        <div className="flex items-center ">
        </div>
        <div>
          <div className="text-sm">
          Release: <br></br>
            <span className="font-bold">{props.air_date}</span>
          </div>
          {/* <div className="text-sm">First seen in: <span
        className="font-bold">
        {}</span></div> */}
        </div>
      </div>
    </div>
  );
}

