import Image from 'next/image'
import mediaPic from '../public/mediapic.jpg'

const Card = ({ imageUrl, title }) => (
  <div className="relative flex flex-col items-center justify-end h-80 p-6 border border-cd6977 rounded-lg overflow-hidden">
    <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
    <div className="absolute left-0 bottom-0 p-4 bg-white bg-opacity-80">{title}</div>
  </div>
)

const Grid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
    <Card
      imageUrl={mediaPic}
      title="Card 1"
    />
    <Card
      imageUrl={mediaPic}
      title="Card 2"
    />
    <Card
      imageUrl={mediaPic}
      title="Card 3"
    />
    <Card
      imageUrl={mediaPic}
      title="Card 4"
    />
    <Card
      imageUrl={mediaPic}
      title="Card 5"
    />
    <Card
      imageUrl={mediaPic}
      title="Card 6"
    />
    <Card
      imageUrl={mediaPic}
      title="Card 7"
    />
  </div>
)

export default Grid
