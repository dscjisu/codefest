import Image from 'next/image'
import Link from 'next/link'
import TitleSponsor from '../../content/Sponsors/Title.json'

function Title() {
    return (
        <div className="lg:mx-10 flex flex-col justify-center gap-10 py-5 min-h-40  rounded-2xl  shadow shadow-red-500 Title_sponsor ">
            <h1
                className='lg:text-3xl text-2xl text-center font-bold text-red-500'
            >
                TITLE SPONSORS
            </h1>
            <div className="grid grid-cols-1 px-10 gap-10 place-content-center">
                {
                    TitleSponsor.map((item, index) => {
                        return (
                            <div className="flex justify-center items-center col-span-1" key={index}>
                                <Link href={item.link} passHref>
                                    <Image className="rounded-lg bg-cover"
                                        src={item.image}
                                        alt={item.name}
                                        width={300} height={250} />
                                </Link>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Title