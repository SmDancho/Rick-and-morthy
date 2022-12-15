import {Link} from 'react-router-dom';

export function Header() {
  return (
    <div className="container ">
      <nav className="rounded-lg shadow-xl shadow-black-500/50 px-12 border-2 flex justify-around items-center">
        <img src="/logo.svg" alt="logotype" />
        <ul className="flex h-24 items-center justify-between">
          <Link to={'/Characters'}>
            <li className="cursor-pointer m-10">Characters</li>
          </Link>
          <Link to={'/Locations'}>
            <li className="cursor-pointer m-10">Locations</li>
          </Link>
          <Link to={'/Episodes'}>
            <li className="cursor-pointer m-10">Episodes</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
