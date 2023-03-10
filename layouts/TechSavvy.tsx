import Link from "next/link"

function TechSavvy() {

    return (
        <section id="About" className="container mx-auto lg:p-10 p-2 py-20">
            <div className="relative flex flex-col px-5">
                <h1 className="lg:text-6xl text-3xl font-gochi font-bold text-center pb-4">TechSavvy</h1>
                <div className="flex  flex-col">
                    <div className="basis-1/2  flex justify-center items-center">
                        <p className="font-semibold text-gray-600 lg:text-center text-justify text-xl">
                            TechSavvy is the most anticipated one-day event of CodeFest 2023, where leading tech professionals will share their insights on the latest developments and emerging trends in the tech industry. The event will feature an outstanding lineup of speakers who will inspire, educate, and entertain attendees through their innovative and informative presentations.
                        </p>
                    </div>
                    <div className="basis-1/2  flex justify-center pt-20 items-center ">
                        <iframe
                            title="TechSavvy"
                            src="https://lu.ma/embed-checkout/evt-XGTOVnLh5gBkWza"
                            aria-hidden="false"
                            className="border-2 rounded-md border-gray-300  w-[70rem] h-[30rem]"
                        ></iframe>
                    </div>
                    <div className="pt-10">
                        <div className="flex flex-col justify-center items-center">
                            <Link href={"/techsavvy"}>
                                <button title="Learn More about Tech Savvy" className="px-5 py-2 rounded-md bg-purple-700 shadow-md shadow-purple-800">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:pb-20" />
        </section >
    )
}

export default TechSavvy