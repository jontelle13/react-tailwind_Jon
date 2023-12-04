
export const Notizia = ({img,znbk,title,text}) => {
  return (
    <article class="flex mt-14 max-md:w-full">
        <div>
          <img src={img} alt=''></img>
        </div>
        <div class="pl-6 h-auto">
          <p class="text-4xl font-bold text-gray-300 mb-8" >{znbk}</p>
          <h2 class="text-xl font-bold mb-8 hover:text-red-400"><a href="#">{title}</a></h2>
          <p class="leading-6 font-light text-gray-500">{text}</p>
        </div>
    </article>
  )
}
