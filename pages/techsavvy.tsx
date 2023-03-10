import Speaker from "../layouts/Speaker";

import SpeakerData from './../content/Speaker.json';


interface ISpeakerdata {
    name: string,
    subtitle: string,
    bio: string,
    image: string,
    tags: string[]
}


export async function getStaticProps() {

    const Speakers = SpeakerData;



    return {
        props: {
            Speakers,
        }, // will be passed to the page component as props
    }
}


function techsavvy({ Speakers }: { Speakers: ISpeakerdata[] }) {
    return (
        <main className="container mx-auto lg:px-10 p-2  lg:py-72 ">
            <div className='min-h-screen text-center'>

                <div>
                    <h1 className="lg:text-6xl text-3xl  font-bold text-center pb-4 font-gochi">TechSavvy</h1>
                    <p className='font-semibold text-gray-600  lg:px-40 lg:text-center text-xl'>TechSavvy is the most anticipated one-day event of CodeFest 2023, where leading tech professionals will share their insights on the latest developments and emerging trends in the tech industry. The event will feature an outstanding lineup of speakers who will inspire, educate, and entertain attendees through their innovative and informative presentations.</p>
                </div>

                <div className="pt-60">
                    <h1 className="lg:text-6xl text-3xl  font-bold text-center pb-4 font-lato text-yellow-500">Register</h1>
                    <p className="font-semibold text-gray-600  lg:px-40 lg:text-center text-xl">At TechSavvy, you will have the chance to connect with like-minded professionals, expand your knowledge, and gain valuable insights into the future of technology. So, don&apos;t miss out on this fantastic opportunity to learn from the best and stay ahead of the curve in the ever-changing world of tech. Join us at CodeFest 2023 and be a part of the future of tech!</p>
                    <div className="basis-1/2  flex justify-center pt-20 items-center ">
                        <iframe
                            title="TechSavvy"
                            src="https://lu.ma/embed-checkout/evt-XGTOVnLh5gBkWza"
                            aria-hidden="false"
                            className="border-2 rounded-md border-gray-300  w-[70rem] h-[30rem]"
                        ></iframe>
                    </div>
                </div>

                <div>
                    <Speaker speakerData={Speakers} />

                </div>
            </div>
        </main>
    )
}

export default techsavvy