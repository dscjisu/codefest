
import SpeakerCard from "../components/SpeakerCard"

interface SpeakerData {
    speakerData: any
}

function Speaker({ speakerData }: SpeakerData) {
    return (
        <>
            <section id="Speaker" className="container mx-auto lg:p-10 p-2">
                <div className="relative flex flex-col px-5">
                    <h1 className="lg:text-6xl text-3xl font-gochi font-bold text-center pb-4">Speaker</h1>
                    <p className="font-semibold text-gray-600  lg:px-40 lg:text-center text-xl">
                        We are excited to announce the lineup of
                        talented and knowledgeable speakers for this year&apos;s
                        CodeFest! Our speakers come from a wide range of
                        backgrounds and fields, and we are confident that
                        their insights and expertise will provide valuable
                        and engaging content for attendees.
                    </p>
                    <div className={`grid ${speakerData.length >= 3 ? "lg:grid-cols-3" : `lg:grid-cols-${speakerData.length}`} grid-cols-1 gap-4 justify-items-center content-center`}>
                        {
                            speakerData.map((speaker: any, index: number) => {
                                return (
                                    <SpeakerCard
                                        key={index}
                                        name={speaker.name}
                                        subtitle={speaker.subtitle}
                                        bio={speaker.bio}
                                        image={speaker.image}
                                        tags={speaker.tags}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Speaker

