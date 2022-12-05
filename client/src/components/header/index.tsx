export function Header() {
    return (  
        <div className="container">
            <nav className="rounded-lg shadow-xl shadow-black-500/50 px-12 border-2"> 
                <ul className="flex h-24 items-center justify-between">
                    <li className="cursor-pointer">Characters</li>
                    <li className="cursor-pointer">Locations</li>
                    <li className="cursor-pointer">Episodes</li>
                </ul>
            </nav>
        </div>
    );
}

