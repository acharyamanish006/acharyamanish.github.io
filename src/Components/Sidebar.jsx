//data
import { details } from "../data/details";
import { mediaHandles } from "../data/mediaHandles";
import { Avatar } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";
//style

export default function Sidebar() {
  const [hide, setHide] = useState(false);

  function hideSideBar() {
    setHide(!hide);
    // console.log(hide);
  }
  return (
    <div
      className={`relative bg-primary-black flex justify-center items-center md:mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:my-8  ${
        hide ? "px-10" : " "
      }`}
    >
      <div className="flex-col justify-center align-middle">
        <div className="flex items-center mb-7 mt-3">
          <section className="bg-light-dark rounded-2xl p-3 mr-5">
            <Avatar
              alt="Acharya Manish"
              src="https://avatars.githubusercontent.com/u/100832817?v=4"
              sx={{ width: 70, height: 70 }}
            />
          </section>
          <div className="flex-col ">
            <p className="font-bold text-xl mb-3">Acharya Manish</p>
            <p className="bg-secondary-black text-center rounded-md py-1 opacity-80">
            Software Engineer
            </p>
          </div>
        </div>
        <main
          className={` border-y border-primary-golden border-opacity-10 py-3 my-2 ${
            hide ? "hidden" : ""
          }`}
        >
          {details?.map((obj) => (
            <div className="flex m-1 my-5" key={obj.title}>
              <p className="p-3 bg-secondary-black  shadow-secondary-black shadow-sm border border-primary-golden border-opacity-10 rounded-xl mr-3 opacity-90 text-primary-golden">
                {<obj.icon />}
              </p>
              <div className="flex-col">
                <p className="opacity-60 uppercase">{obj.title}</p>
                <p className="">{obj.content}</p>
              </div>
            </div>
          ))}
        </main>
        <footer
          className={`flex ${
            hide
              ? "border-t border-primary-golden border-opacity-10 py-3 my-2"
              : ""
          }`}
        >
          {mediaHandles.map((handlers) => (
            <p key={handlers.icon} className="mr-3">
              <a href={handlers.link} target="_blank" rel="noreferrer">
                <handlers.icon />
              </a>
            </p>
          ))}
        </footer>
        <div
          className={`absolute top-3 right-4 cursor-pointer text-primary-golden md:hidden`}
          onClick={hideSideBar}
        >
          <DehazeIcon />
        </div>
      </div>
    </div>
  );
}
