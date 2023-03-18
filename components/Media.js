// export default function Media()
// {
//     return <h1 className="flex  justify-center">Media</h1>
// }
import Image from "next/image";
import im from '../public/hero_adobe_express.svg'
import Grid from '../components/media_news.js'

const HomePage = () => (
  <div>
    <h1>My Grid of Cards</h1>
    <Grid />
  </div>
)

export default HomePage


