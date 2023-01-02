
function Title() {
    return (
        <div className="lg:mx-10 flex flex-col justify-center gap-10 py-5 min-h-40  rounded-2xl shadow-inner shadow-gray-500 drop-shadow-2xl Title_sponsor ">
            <h1
                className='lg:text-3xl text-2xl text-center font-bold text-red-500'
            >
                TITLE SPONSORS
            </h1>
            <div className="grid lg:grid-cols-2 px-10 gap-10">
                {/* {
                    DiamondSponsor.map((item, index) => {
                        return (
                            <div className="flex justify-center items-center  col-span-1" key={index}>
                                <Link href={item.link} passHref>
                                    <Image className="rounded-lg bg-cover"
                                        src={item.image}
                                        alt={item.name}
                                        width={250} height={250} />
                                </Link>

                            </div>
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default Title