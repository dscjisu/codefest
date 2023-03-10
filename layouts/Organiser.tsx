
import SpeakerCard from "../components/SpeakerCard"

interface OrganiserData {
    organiserData: any
}

function Organiser({ organiserData }: OrganiserData) {
    return (
        <section id="Organiser" className="container mx-auto lg:p-10 p-2">
            <div className="relative flex flex-col px-5">
                <h1 className="lg:text-6xl text-5xl font-gochi font-bold text-center pb-4">Organisers</h1>
                <p className="font-semibold text-gray-600  lg:px-40 text-center  text-xl">
                    We're proud to introduce the dedicated and passionate team of organizers behind this year's CodeFest. Our organizers come from a variety of backgrounds and have diverse skill sets, but they all share a  common goal: to create an<span className="text-gray-400 text-lg"> exceptional event that showcases the latest advances in technology and fosters collaboration and innovation within the tech community.</span>
                </p>
                <div className={`grid ${organiserData.length >= 10 ? "lg:grid-cols-10" : `lg:grid-cols-${organiserData.length}`} sm:grid-cols-2 grid-cols-1 gap-4 justify-items-center content-center`}>
                    {
                        organiserData.map((organiser: any, index: number) => {
                            return (
                                <SpeakerCard
                                    key={index}
                                    name={organiser.name}
                                    subtitle={organiser.subtitle}
                                    bio={organiser.bio}
                                    image={organiser.image}
                                    tags={organiser.tags}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Organiser

