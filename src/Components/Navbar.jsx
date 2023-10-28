import { Link } from "react-router-dom";
import { navbarData } from "../data/navbar";

export default function Navbar() {
  return (
    <div className="absolute z-10 max-md:bottom-0 md:-right-5  bg-nav-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white md:top-0 max-md:fixed md:overflow-hidden ">
      <div className="">
        {navbarData.map((data) => (
          <Link
            to={data.link}
            key={data.link}
            className="p-5 text-primary-golden hover:text-white font-medium "
          >
            {data.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
