import irudi from '../assets/images/image-web-3-mobile.jpg'
import irudi2 from '../assets/images/image-web-3-desktop.jpg'


export const Container = () => {
  return (
    <div className="mt-10 w-2/3 max-lg:w-full mr-20">
      <div className="">
        <img src={irudi} alt="Irudi" className="md:hidden" />
        <img src={irudi2} alt="Irudi2" className="hidden md:block" />
        <div className="flex mt-8 max-lg:flex-wrap">
          <h2 className="w-1/2 sm:mr-16 text-7xl font-bold max-lg:w-full">
            The Bright Future of Web 3.0?
          </h2>
          <div className="w-1/2 flex flex-column flex-wrap max-lg:w-full">
            <label className="w-full mb-14 leading-7 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, porro necessitatibus nostrum maxime nobis nemo cumque iure consequuntur expedita ullam rem.</label>
            <button className="hover:bg-slate-900 w-[185px] h-[48px] text-white bg-red-400"> READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}
