import Image from "next/image"

import PlatinumSponsor from '../../content/Sponsors/Platinum.json'

function Platinum() {
    return (
        <div className="lg:mx-10 flex justify-center flex-col gap-10  py-5  rounded-2xl shadow shadow-emerald-600 Platinum_sponsor ">
            <h1
                className='text-3xl text-center font-bold text-emerald-600'
            >
                PLATINUM SPONSORS
            </h1>
            <div className="grid lg:grid-cols-3 px-10  gap-10">
                {
                    PlatinumSponsor?.map((item, index) => {
                        return (
                            <div className="flex justify-center items-center  col-span-1" key={index}>
                                <Image className="rounded-lg bg-cover"
                                    src={item?.image}
                                    alt={item?.name}
                                    width={250} height={250} />

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Platinum