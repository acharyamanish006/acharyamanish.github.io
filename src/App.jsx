import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import About from "./subComponents/About";
import Contact from "./subComponents/Contact";
import Project from "./subComponents/Project";
import Resume from "./subComponents/Resume";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className=" appContainer  bg-bg-black w-screen h-screen text-text-white flex justify-center items-center max-mobile:flex-col max-md:w-full max-md:h-fit max-md:pb-60">
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
