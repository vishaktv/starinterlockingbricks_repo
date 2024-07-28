import { BsArrowRight } from "react-icons/bs"

const IntroSection = () => {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-start background-gradient w-full">
        <div className="cont flex items-center flex-col md:flex-row">
          <div className="heading-text flex-1 pt-8 text-white">
            <div className="flex "> 
            <span className="font-nuehassMedium italic text-4xl md:text-7xl mr-3 ">&quot;</span> 
            <h1 className="font-montserrat text-3xl md:text-6xl font-normal mb-8">
             <span className="font-extrabold">B</span>uilding a <span className="font-extrabold">S</span>trong <span className="font-extrabold">F</span>oundation<span className="font-nuehassMedium italic">&quot;</span>.</h1>
            </div>
            <h4 className="font-montserrat text-5xl md:text-7xl font-thin">Welcome to</h4>
            <h1 className="font-nuehassMedium text-9xl md:text-9xl font-extrabold leading-[0.9]">STAR & SHINE</h1>
            <h1 className="font-nuehassLight text-6xl font-black">INTERLOCKING BRICKS</h1>
            <button className="px-7 py-5 bg-red-400 font-montserrat text-3xl text-white button-gradient mt-12 flex">
              <p className="my-0 mr-2.5 ">Contact Us </p><BsArrowRight size={20}/></button>
          </div>
        </div>

      </div>
  )
}

export default IntroSection