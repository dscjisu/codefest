


import Image from "next/image"

interface IOrganisation {
    name: string,
    image: string,
    link: string

}

function OrganisationCard({ name, image, link }: IOrganisation) {
    return (
        <div className="max-w-md rounded overflow-hidden shadow-lg
         flex justify-center items-center "
            onClick={
                () => {
                    window.open(link, "_blank")
                }
            }>
            <div className="flex justify-center items-center" title={name}>
                <Image className="rounded bg-cover"
                    src={image}
                    alt={name}
                    width={150} height={150} />
            </div>
        </div>
    )
}

export default OrganisationCard