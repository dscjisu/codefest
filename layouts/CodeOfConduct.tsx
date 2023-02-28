
function CodeOfConduct() {

    return (
        <section id="CodeofConduct" className="container mx-auto lg:p-10 p-2 lg:py-5">
            <h1 className="lg:text-6xl text-3xl font-mono font-bold text-center lg:pb-10 pb-2">Code of Conduct</h1>
            <div className="relative grid lg:grid-cols-6 lg:p-0  gap-10">
                <div className="flex flex-col p-10 lg:col-span-3  border-2  rounded-lg border-yellow-300 shadow-xl hover:shadow-yellow-300 border-spacing-4 ease-linear ">
                    <h2 className="text-xl font-mono font-bold text-left pb-4 text-pink-500">No plagiarism or re-using of past work</h2>
                    <div className="basis-1/2 flex justify-center items-center">
                        <p className="font-semibold text-gray-600">
                            We encourage you to submit projects only prepared in the duration of the hackathon.
                            However, if you decide to submit projects consisting of re-used code, or re-submit a project that you have already submitted previously to any other hackathon, you are to disclose such previous use and its extent with the submission.


                            If upon inspection, it is found that the project has re-used code that was not disclosed with the submission, the organizer may ask the participant to point out similarities and differences between the old and new work, and/or disqualify the submission from winning awards automatically.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col p-10 lg:col-span-3  border-2  rounded-lg border-yellow-300 shadow-xl hover:shadow-yellow-300 border-spacing-4  ease-linear">
                    <h2 className="text-xl font-mono font-bold text-left pb-4 text-pink-500 ">No discrimination</h2>
                    <div className="basis-1/2 flex flex-col ">
                        <p className="font-semibold text-gray-600">
                            Hackathons hosted on Devfolio are dedicated to providing a safe and comfortable environment and harassment-free experience for everyone. No discrimination, on the basis of the following, shall be tolerated:
                        </p>
                        <div className="text-start font-semibold text-gray-500 pl-5">
                            <ul className="list-disc">
                                <li>gender</li>
                                <li>gender identity and expression</li>
                                <li>age</li>
                                <li>sexual orientation</li>
                                <li>disability</li>
                                <li>physical appearance</li>
                                <li>body size</li>
                                <li>race</li>
                                <li>ethnicity</li>
                                <li>nationality</li>
                                <li>religion</li>
                                <li>political views</li>
                                <li>previous hackathon attendance or lack of</li>
                                <li>computing experience or lack of</li>
                                <li>chosen programming language or tech stack</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col p-10 lg:col-span-2 border-2  rounded-lg border-yellow-300 shadow-xl hover:shadow-yellow-300 border-spacing-4  ease-linear">
                    <h2 className="text-xl font-mono font-bold text-left pb-4 text-pink-500">No harassment</h2>
                    <div className="basis-1/2 flex flex-col ">
                        <p className="font-semibold text-gray-600">
                            We do not tolerate harassment of hackathon participants in any form, including offensive discriminatory verbal comments, public display of sexual material, in public spaces, deliberate intimidation, stalking, wilful disruption, inappropriate physical contact, unwelcome sexual advances, and the taking of photographs and audio/video recordings without the subjects consent.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col p-10  lg:col-span-2 border-2  rounded-lg border-yellow-300 shadow-xl hover:shadow-yellow-300 border-spacing-4  ease-linear">
                    <h2 className="text-xl font-mono font-bold text-left pb-4 text-pink-500">No recording without consent</h2>
                    <div className="basis-1/2 flex flex-col ">
                        <p className="font-semibold text-gray-600">
                            While photography and videography is encouraged, other participants must be given a reasonable chance to opt out from being photographed. If they object to the taking of their photograph, comply with their request.
                            <br />
                            If they express their disapproval after the photo or video has been captured, please delete it from your records, and in case it has been shared online, take reasonable steps to retract it from social media as well.
                            <br />
                            It is inappropriate to take photographs in contexts where people have a reasonable expectation of privacy (in bathrooms or where participants are sleeping).
                        </p>
                    </div>
                </div>
                <div className="flex flex-col p-10  lg:col-span-2 border-2  rounded-lg border-yellow-300 shadow-xl hover:shadow-yellow-300 border-spacing-4  ease-linear">
                    <h2 className="text-xl font-mono font-bold text-left pb-4 text-pink-500">Intellectual Property</h2>
                    <div className="basis-1/2 flex flex-col ">
                        <p className="font-semibold text-gray-600">
                            You will own any developments made by you, and all rights, titles and interests in those developments, including the intellectual property rights therein, shall belong to you. By posting your submission on Devfolio, you are granting Devfolio a non-exclusive, worldwide, royalty-free license to use, distribute, display and reproduce your submission only to the extent required by us to provide services on the Devfolio platform. We will never try to steal your creations or use them exploitatively.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col p-10  lg:col-span-6 border-2  rounded-lg border-yellow-300 shadow-xl hover:shadow-yellow-300 border-spacing-4  ease-linear">
                    <h2 className="text-xl font-mono font-bold text-pink-500 text-center pb-4">Always report</h2>
                    <div className="basis-1/2 flex flex-col ">
                        <p className="font-semibold text-gray-600">
                            If you notice any violation of this Code of Conduct or find otherwise suspicious behavior or have any concerns, please contact a member of the hackathon organizing committee immediately.
                            We will be happy to help participants contact local security or local law enforcement, or otherwise assist those experiencing harassment to feel safe for the duration of the hackathon. We value your attendance.
                        </p>
                    </div>
                </div>
            </div>
            <div className="lg:pb-20" />
        </section >
    )
}

export default CodeOfConduct