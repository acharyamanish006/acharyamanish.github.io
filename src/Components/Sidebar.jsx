//data
import { details } from "../data/details";
import { mediaHandles } from "../data/mediaHandles";
import { Avatar } from "@mui/material";
//style

export default function Sidebar() {
  return (
    <div className="bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white">
      <div className="flex-col justify-center align-middle">
        <div className="flex items-center mb-7 mt-3">
          <section className="bg-light-dark rounded-2xl p-3 mr-5">
            <Avatar
              alt="Acharya Manish"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-zgvB00geDVBZndlShmCPStMLjUcUHhvKz5v7jQ9lQh0ICxcrQISN-_QwaItOoySB3pw&usqp=CAU"
              sx={{ width: 70, height: 70 }}
            />
          </section>
          <div className="flex-col ">
            <p className="font-bold text-xl mb-3">Acharya Manish</p>
            <p className="bg-secondary-black text-center rounded-md py-1 opacity-80">
              web developer
            </p>
          </div>
        </div>
        <main className="border-y border-primary-golden border-opacity-10 py-3 my-2">
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
        <footer className="flex">
          {mediaHandles.map((handlers) => (
            <p key={handlers.icon} className="mr-3">
              <handlers.icon />
            </p>
          ))}
        </footer>
      </div>
    </div>
  );
}
