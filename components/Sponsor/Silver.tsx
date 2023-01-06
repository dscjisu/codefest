import Image from "next/image"
import Link from "next/link"
import SilverSponsor from '../../content/Sponsors/Silver.json'



function Silver() {
    return (
        <div className="lg:mx-10 flex justify-center flex-col gap-10 py-5  rounded-2xl shadow shadow-gray-500  silver_sponsor ">
            <h1
                className='lg:text-3xl text-2xl text-center font-bold text-gray-500'
            >
                SILVER SPONSORS
            </h1>
            <div className="grid lg:grid-cols-1 px-10 gap-10">
                {
                    SilverSponsor.map((item, index) => {
                        return (
                            <div className="flex justify-center items-center  col-span-1" key={index}>
                                <Link href={item.link} passHref>
                                    <Image className="rounded-lg bg-cover"
                                        src={item.image}
                                        alt={item.name}
                                        width={100} height={150} />
                                </Link>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Silver