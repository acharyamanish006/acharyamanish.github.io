import ComponentNav from "../Components/ComponentNav";
// import Navbar from "../Components/Navbar";

export default function Resume() {
  return (
    <div className="containerTransition relative bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:mx-1">
      <div className="max-md:hidden">
        <ComponentNav />
      </div>
      <div className="flex-col justify-center align-middle">
        <section className="flex md:justify-start align-middle mb-6  max-md:justify-center">
          <h1 className="text-center font-bold text-lg border-b-4 border-primary-golden border-opacity-80 pb-1 px-4">
            Resume
          </h1>
        </section>
        <main>
          <form>
            <input type="text" name="" id="" />
            <input type="email" name="" id="" />
            <input type="text" name="" id="" />
            <input type="submit" value="" />
          </form>
        </main>
      </div>
    </div>
  );
}
