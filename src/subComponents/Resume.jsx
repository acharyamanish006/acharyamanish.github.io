import ComponentNav from "../Components/ComponentNav";
import useWindowDimensions from "../Hooks/useWindowDimensions";
// import Navbar from "../Components/Navbar";

export default function Resume() {


  const { height, width } = useWindowDimensions();
  
  
  // const [Width,setWidth] = useState()


// setWidth(width)
console.log(height)


const IFrames = ()=>{
  if(width >1100){

    return <iframe height='500px' width='600px' src="Manish.pdf"  ></iframe>
  }
  else{

    return <iframe height='400px' width='300px' src="Manish.pdf"  ></iframe>
  }
}

  return (
    <div className=" w-fit h-fit relative bg-primary-black flex justify-center items-center mr-5 p-5 rounded-xl border border-opacity-10 border-white max-md:mx-1">
      <div className="max-md:hidden">
        <ComponentNav />
      </div>
      <div className="flex-col justify-center align-middle">
        <section className="flex md:justify-start align-middle mb-6  max-md:justify-center">
          <h1 className="text-center font-bold text-lg border-b-4 border-primary-golden border-opacity-80 pb-1 px-4">
            Resume
          </h1>
        </section>
        <main className="w-fit h-fit">
          <IFrames/>
          {/* <div className="block  w-full">
            <iframe width="100%" height="100%"
              src="Manish.pdf"
               className="absolute top-0 left-0">
            </iframe>
        </div> */}
          {/* <iframe src="Manish.pdf" className="w-full h-full border-none"></iframe> */}
        </main>
      </div>
    </div>
  );
}
