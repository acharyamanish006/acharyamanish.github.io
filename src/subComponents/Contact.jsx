import SendIcon from "@mui/icons-material/Send";
export default function Contact() {
  return (
    <div className="bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white  max-md:ml-5 max-md:mb-16">
      <div className="flex-col justify-center align-middle">
        <section>
          <h1 className="text-center font-bold text-lg ">Contact</h1>
        </section>
        <main>
          <form className="flex-col mt-11">
            <div className="flex justify-between max-md:flex-col ">
              <input
                type="text"
                name=""
                placeholder="Full Name"
                className="bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:mb-6"
              />
              <input
                type="email"
                name=""
                placeholder="Email"
                className="bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white"
              />
            </div>
            <input
              type="text"
              name="Message"
              placeholder="Message"
              // value="Message"
              className="bg-primary-black flex justify-center items-center mt-5 p-5 rounded-xl border border-opacity-10 border-white w-full max-md:w-fit"
            />
            <div className="text-primary-golden bg-primary-black flex justify-around mt-5 px-11 py-3 cursor-pointer rounded-xl border border-opacity-10 border-white w-1/4  hover:border-primary-golden hover:border-opacity-30 max-md:w-1/2">
              <input type="submit" value="SUBMIT" name="" />
              <SendIcon />
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
