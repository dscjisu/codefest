
import Image from 'next/image'
import Link from 'next/link'
import GoldSponsor from '../../content/Sponsors/Gold.json'

function Gold() {
    return (
        <div className="lg:mx-10 flex justify-center flex-col gap-10 py-5  rounded-2xl shadow-inner shadow-gray-500 drop-shadow-2xl Gold_sponsor ">
            <h1
                className='lg:text-3xl text-2xl text-center font-bold text-yellow-500'
            >
                GOLD SPONSORS
            </h1>
            <div className="grid lg:grid-cols-2 px-10 gap-2 place-content-center justify-items-center">
                {
                    GoldSponsor.map((item, index) => {
                        return (
                            <div className="flex justify-center items-center  col-span-1" key={index}>
                                <Link href={item.link} passHref>
                                    <Image className="rounded-lg bg-cover"
                                        src={item.image}
                                        alt={item.name}
                                        width={100} height={50} />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Gold