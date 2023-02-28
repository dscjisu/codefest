// import OrganisationCard from "../components/OrganisationCard"

import CommunityPartnerCard from './../components/CommunityPartnerCard'


function CommunityPartner({ partnerData }: any) {
    return (
        <section id="CommunityPartner" className="container mx-auto lg:p-10 p-2">
            <div className="relative flex flex-col px-5">
                <h1 className="lg:text-6xl text-3xl font-mono font-bold text-center pb-4">Community Partners</h1>
                <div className="pb-10" />
                <div
                    className={`grid ${partnerData.length >= 5 ? "lg:grid-cols-5 md:grid-cols-3 grid-cols-1 " : `lg:grid-cols-${partnerData.length} `} 
                    lg:px-80 place-content-center justify-items-center gap-5`}>
                    {
                        partnerData?.map((Organisation: any, index: number) => {
                            return (
                                <CommunityPartnerCard
                                    key={index}
                                    name={Organisation.name}
                                    image={Organisation.image}
                                    link={Organisation.link}
                                />
                            )
                        })
                    }
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="font-semibold text-gray-600  lg:px-40 text-center pt-5">
                        Interested in <span className="text-gray-300 "> Joining CodeFest as Community Partner? </span>  We&apos;re always looking for
                        <span className="text-pink-600 text-lg"> Community Partner </span>
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
                            className="bg-yellow-500 w-64 p-2 rounded-lg shadow-lg shadow-yellow-300 active:shadow-black  active:shadow-inner">
                            <span className="font-semibold text-black">
                                Apply as a Community Partner
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="lg:pb-20 pb-2"
            />
        </section>
    )
}

export default CommunityPartner