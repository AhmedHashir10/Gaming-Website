// export default function Media()
// {
//     return <h1 className="flex  justify-center">Media</h1>
// }
import Image from "next/image";
import im from '../public/hero_adobe_express.svg'

export default function HeroSection()
{
    return <section><div style={{ position:"fixed"}}>
    {/* <Image
    src={im}
    alt='/'
    width='100%'
    height='10px'
    className='cursor-pointer z-[1]'
  /> */}
  </div><h1 className="flex  justify-center">Monastic Hill Studios</h1>
  </section>
}