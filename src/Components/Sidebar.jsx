import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
//data
import { details } from "../data/details";
import { Avatar } from "@mui/material";
//style

export default function Sidebar() {
  return (
    <div className="cardContainer">
      <div className="cardWrapper">
        <div className="cardHeader">
          <Avatar
            alt="Acharya Manish"
            // src={}
            // sx={{ width: 24, height: 24 }}
          />
          <div className="cardHeaderTitle ">
            <p>Acharya Manish</p>
            <p>Full-Stack web developer</p>
          </div>
        </div>
        <div className="cardBody">
          {details?.map((obj) => (
            <div className="cardDetails" key={obj.title}>
              <p>{<obj.icon />}</p>
              <div className="cardDetailsContent">
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
