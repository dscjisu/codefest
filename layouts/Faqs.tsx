
import FaqsCard from "../components/FaqsCard";

function Faq({ FaqsData }: any) {
    return (

        <section id="Faq" className="container mx-auto lg:p-10 p-2 py-20">
            <div className="relative flex flex-col px-5">
                <h1 className="lg:text-6xl text-3xl font-mono font-bold text-left pb-4">FAQs</h1>
                <div className="flex flex-col">
                    <div className="basis-1/2 flex justify-center items-center pb-5">
                        <p className="font-semibold text-gray-600">
                            We know that many of you would be first-time
                            <span className="text-pink-800 capitalize"> hackers </span>  here and there must be many questions
                            buzzing in your mind. But don&apos;t worry, we got you covered! 💪
                            Go through these <span className="text-pink-800 capitalize"> FAQs </span>  and you&apos;ll get most of your queries solved.
                            <span className="text-yellow-600 capitalize"> In case you have more questions,  ping us at the bottom-right corner </span> .
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center lg:p-10 p-2">
                        {
                            FaqsData.map((faq: any, index: any) => (
                                <FaqsCard
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="lg:pb-20" />
        </section >
    );
}


export default Faq;
