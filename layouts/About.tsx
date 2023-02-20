import Image from "next/image"

function About() {
    return (
        <section id="About" className="container mx-auto lg:p-10 p-2 py-20">
            <div className="relative flex flex-col px-5">
                <h1 className="lg:text-6xl text-3xl font-mono font-bold text-left pb-4">About</h1>
                <div className="flex lg:flex-row flex-col">
                    <div className="basis-1/2 flex justify-center items-center">
                        <p className="font-semibold text-gray-600">
                            CodeFest is a 5-days Tech Festival organized by the
                            <span className="text-gray-400 text-lg">Computer Science and Engineering Department of JIS University Kolkata</span>.
                            It is a platform for students to showcase their technical skills and creativity.
                            The hackathon is a great opportunity for students to learn, network, and build something new.
                            <br />
                            It was put together by a large group of tech enthusiasts from <span className="text-gray-400">Google Developer Student Club (GDSC) JIS University</span> and <span className="text-gray-400">Code For Community</span>.
                            The main goal is to grow our local community and give hackers an unforgettable experience.
                            The plethora of fun and excitement is waiting for you from 17th March 2023.
                        </p>
                    </div>
                    <div className="basis-1/2 hidden lg:flex justify-end items-center ">
                        <Image
                            src="/layout/laptop.png"
                            alt="laptop"
                            width={500}
                            height={500}
                            className="about-laptop rounded"
                        />

                    </div>
                </div>
            </div>
            <div className="lg:pb-20" />
        </section >
    )
}

export default About