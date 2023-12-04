import logo from '../assets/images/logo.svg'
import burgerMenu from '../assets/images/icon-menu.svg'

export const Header = () => {
  return (
    <header class=" flex justify-between">
      <img src={logo} alt="Logo" class="w-20" />
      <ul class="flex max-md:hidden">
        <li class="p-3 ml-6 >text-2xl hover:text-orange-500"><a href='#'>Home</a></li>
        <li class="p-3 ml-6 >text-2xl hover:text-orange-500"><a href='#'>New</a></li>
        <li class="p-3 ml-6 >text-2xl hover:text-orange-500"><a href='#'>Popular</a></li>
        <li class="p-3 ml-6 >text-2xl hover:text-orange-500"><a href='#'>Trending</a></li>
        <li class="p-3 ml-6 >text-2xl hover:text-orange-500"><a href='#'>Categories</a></li>
      </ul>
      <img src={burgerMenu} alt="burgerMenu" class="md:hidden" ></img>
    </header>
  )
}
