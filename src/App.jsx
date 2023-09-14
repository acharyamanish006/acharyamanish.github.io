import "./App.css";
import Sidebar from "./Components/Sidebar";
import About from "./subComponents/About";
import Contact from "./subComponents/Contact";

function App() {
  return (
    <div className="bg-bg-black w-screen h-screen text-text-white flex justify-center items-center ">
      <Sidebar />
      {/* <About /> */}
      <Contact />
    </div>
  );
}

export default App;
