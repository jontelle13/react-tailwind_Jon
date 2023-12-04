import { Notizia } from "./Notizia"
import irudi3 from '../assets/images/image-gaming-growth.jpg'

import irudi1 from '../assets/images/image-retro-pcs.jpg'
import irudi2 from '../assets/images/image-top-laptops.jpg'

export const Notiziak = () => {
  return (
    <div class="md:flex justify-between mt-10">
      <Notizia 
        img={irudi1}
        znbk='01'
        title='Reviving Retro Pcs'
        text='What happens when old PCs are given modern upgrades?.'
      />
      <Notizia 
        img={irudi2}
        znbk='02'
        title='Top 10 Laptop of 2022'
        text='Our best picks for various needs and budgets.'
      />
      <Notizia 
        img={irudi3}
        znbk='03'
        title='The Growth Of Gaming'
        text='How the pandemic has sparked fresh oportunities.'
        />
    </div>
    
  )
}
