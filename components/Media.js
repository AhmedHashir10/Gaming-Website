// export default function Media()
// {
//     return <h1 className="flex  justify-center">Media</h1>
// }
import Image from "next/image";
import im from '../public/hero_adobe_express.svg'
import Grid from '../components/media_news.js'

const HomePage = () => (
  <div className="bg-[#17658f] py-10">
    <Grid />
    <div className="flex justify-center ">
    <div className="h-14 w-fit px-4 text-white flex justify-center items-center bg-red-600 hover:bg-blue-400 duration-200 mt-5">
        <div>VIEW ALL NEWS</div>
        </div>
        </div>
  </div>
)

export default HomePage


