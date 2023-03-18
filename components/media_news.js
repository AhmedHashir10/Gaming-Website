import Image from 'next/image'
import mediaPic from '../public/mediapic.jpg'

const Card = ({ imageUrl, title }) => (
    <div className="relative flex flex-col items-center justify-end h-80 p-6 border border-cd6977  overflow-hidden">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} />
        <div className="absolute left-0 bottom-0 p-4">title</div>
    </div>
)

{/* <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 1</div>
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 2</div>
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 3</div>
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 4</div>
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 5</div>
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 6</div>
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 7</div>
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 8</div>
  <div class="col-span-2 md:col-span-1 bg-gray-100 p-4">Card 9</div>
</div> */}


const Grid = () => (
    <div >
        <section class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-20  ">
            <div className="col-span-2 md:col-span-1 p-4 ">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4 ">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>
            <div className="col-span-2 md:col-span-1 p-4">
                <Card
                    imageUrl={mediaPic}
                    title="Card 1"
                />
            </div>




        </section>
    </div>
)

export default Grid
