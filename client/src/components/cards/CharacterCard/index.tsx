import { Result } from "../../../types/data";

export function Card(props: Result) {
  const IsAclive =
    props.status === "Alive" ? "bg-green-500" : "bg-red-500";
  return (
    <div className="w-96 h-56 border-2 rounded-xl flex mb-4 ">
      <div className="w-48 ">
        <img  className="object-cover w-full h-full rounded-xl" src={props.image} alt="charcterName" />
      </div>
      <div className="flex flex-col justify-around ml-4">
        <div className="font-bold text-2xl">{props.name}</div>
        <div className="flex items-center ">
          <div className={`w-2 h-2  rounded-full ${IsAclive}`}></div>
          <div className="ml-2">{props.status}</div>
        </div>
        <div>
          <div className="text-sm">Last known location: <br></br> <span className="font-bold">{props.location?.name}</span> </div>
          {/* <div className="text-sm">First seen in: <span className="font-bold">{}</span></div> */}
        </div>
      </div>
    </div>
  );
}
