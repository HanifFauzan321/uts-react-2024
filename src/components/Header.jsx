import { Link } from "react-router-dom";
import {  Home } from "lucide-react";
import { CircleUser } from "lucide-react";
import { StoreIcon } from "lucide-react";


export default function Header() {
  return (
    <header className="py-4 px-6 bg-slate-900 flex items-center justify-between shadow-lg ">
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-4 w-1/2">
          <img src="vite.svg" alt="Logo" className="w-10" />
          <h1 className="text-fuchsia-600 italic text-2xl font-bold">Phone Store</h1>
        </div>
        <nav className="flex w-1/2">
          <ul className="flex w-full justify-evenly">
            <li className="list-none flex items-center gap-2 cursor-pointer">
              <Home className="text-white"  size={25} />
              <Link to="home" className="no-underline text-white text-xl">
                Home
              </Link>
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer">
              <StoreIcon className="text-white" size={25} />
              <Link to="film" className="no-underline text-white text-xl">
                Store
              </Link>
            </li>
            <li className="list-none flex items-center gap-2 cursor-pointer">
              <CircleUser className="text-white" size={25} />
              <Link to="contact" className="no-underline text-white text-xl">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
