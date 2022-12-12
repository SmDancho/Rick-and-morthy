export function Header() {
  return (
    <div className="container ">
      <nav className="rounded-lg shadow-xl shadow-black-500/50 px-12 border-2 flex justify-around items-center">
      <img  src="/logo.svg" alt="logotype" />
        <ul className="flex h-24 items-center justify-between">
          <li className="cursor-pointer m-10">Characters</li>
          <li className="cursor-pointer m-10">Locations</li>
          <li className="cursor-pointer m-10">Episodes</li>
        </ul>
      </nav>
    </div>
  );
}
