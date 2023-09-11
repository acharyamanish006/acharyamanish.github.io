import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
//data
import { details } from "../data/details";
import { Avatar } from "@mui/material";
//style

export default function Sidebar() {
  return (
    <div className="bg-stone-800 flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white">
      <div className="flex-col justify-center align-middle">
        <div className="">
          <Avatar
            alt="Acharya Manish"
            // src={}
            // sx={{ width: 24, height: 24 }}
          />
          <div className="">
            <p className="">Acharya Manish</p>
            <p>Full-Stack web developer</p>
          </div>
        </div>
        <div className="">
          {details?.map((obj) => (
            <div className="flex m-1 " key={obj.title}>
              <p className="p-3 bg-stone-700 border border-stone-900 rounded-md mr-3">
                {<obj.icon color="#fdd86c" />}
              </p>
              <div className="flex-col">
                <p>{obj.title}</p>
                <p>{obj.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cardFooter">
          <p>
            <GitHubIcon />
          </p>
          <p>
            <LinkedIn />
          </p>
        </div>
      </div>
    </div>
  );
}
