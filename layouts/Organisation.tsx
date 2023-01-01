import OrganisationCard from "../components/OrganisationCard"


function Organisation({ organisationData }: any) {
    return (
        <section id="" className="container mx-auto lg:p-10 p-2">
            <div className="relative flex flex-col px-5">
                <h1 className="lg:text-6xl text-3xl font-mono font-bold text-center pb-4">Organisation</h1>
                <p className="font-semibold text-gray-600  lg:px-40 text-clip text-lg">
                    We would like to extend our heartfelt gratitude to
                    these organizations for their generous support and
                    contributions.
                </p>
                <div className="pb-10" />
                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 lg:px-80 justify-items-center content-center gap-2">
                    {
                        organisationData.map((Organisation: any, index: number) => {
                            return (
                                <OrganisationCard
                                    key={index}
                                    name={Organisation.name}
                                    image={Organisation.image}
                                    link={Organisation.link}
                                />
                            )
                        })
                    }
                </div>
                {/* <div className="flex flex-col justify-center items-center">
                    <p className="font-semibold text-gray-600  lg:px-40 text-center ">
                        Interested in speaking at CodeFest? We&apos;re always looking for
                        <span className="text-gray-400 text-lg"> Speakers </span>
                        to join us!
                        <br />
                    </p>
                    <div className="flex flex-col justify-center items-center p-5">
                        <button
                            onClick={
                                () => {
                                    window.open("https://forms.gle/mf9xpuYBonqdnhQPA", "_blank")
                                }
                            }
                            className="bg-yellow-500 w-40 p-2 rounded-lg shadow-lg shadow-yellow-300 active:shadow-black  active:shadow-inner">
                            <span className="font-semibold text-black">
                                Apply as a Speaker
                            </span>
                        </button>
                    </div>
                </div> */}
            </div>
            <div
                className="lg:pb-20 pb-2"
            />
        </section>
    )
}

export default Organisation