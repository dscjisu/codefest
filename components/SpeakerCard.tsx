
import Image from "next/image"

interface SpeakerData {
    name: string,
    subtitle: string,
    bio: string,
    image: string,
    tags: string[]
}

function SpeakerCard({ name, subtitle, bio, image, tags }: SpeakerData) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-10  ">
            <div className="flex justify-center items-center">
                <Image className="rounded-full"
                    src={image}
                    alt="Sunset in the mountains"
                    width={250} height={250} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{name}</div>
                <p className="text-pink-500 text-base text-clip text-center">
                    {subtitle}
                </p>
                <p className="text-center">
                    {bio}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-center">
                {
                    tags.map((tag: any, index: number) => {
                        return (
                            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SpeakerCard