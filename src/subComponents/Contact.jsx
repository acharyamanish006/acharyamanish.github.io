import SendIcon from "@mui/icons-material/Send";
import Navbar from "../Components/Navbar";
export default function Contact() {
  return (
    <div className="containerTransition relative bg-primary-black flex justify-center items-center md:mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:mr-0 max-md:p-0 max-md:mb-16 ">
      <Navbar />
      <div className="flex-col justify-center align-middle">
        <section className="flex md:justify-start align-middle md:mb-12 max-md:justify-center max-md:mt-3">
          <h1 className="text-center font-bold text-lg border-b-4 border-primary-golden border-opacity-80 pb-1 px-4">
            Contact
          </h1>
        </section>
        <main className="flex justify-center">
          <form className="flex-col mt-11 justify-center items-center">
            <div className="flex justify-between max-md:flex-col  ">
              <input
                type="text"
                name=""
                placeholder="Full Name"
                className="bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:mb-6 max-md:ml-2"
              />
              <input
                type="email"
                name=""
                placeholder="Email"
                className="bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:ml-2"
              />
            </div>
            <input
              type="text"
              name="Message"
              placeholder="Message"
              // value="Message"
              className="bg-primary-black flex justify-center items-center mt-5 p-5 rounded-xl border border-opacity-10 border-white w-full max-md:w-fit max-md:ml-2"
            />
            <div className="text-primary-golden bg-primary-black flex justify-around mt-5 px-11 py-3 cursor-pointer rounded-xl border border-opacity-10 border-white w-1/4  hover:border-primary-golden hover:border-opacity-30 max-md:w-1/2 max-md:ml-2 max-md:mb-4">
              <input type="submit" value="SUBMIT" name="" />
              <SendIcon />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
