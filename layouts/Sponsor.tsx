
import Diamond from "../components/Sponsor/Diamond"
import Gold from "../components/Sponsor/Gold"
import Platinum from "../components/Sponsor/Platinum"
import Silver from "../components/Sponsor/Silver"
import Title from "../components/Sponsor/Title"

function Sponsor() {
    return (
        <>
            <section id="Sponsors" className="container mx-auto lg:p-10 p-2">
                <div className="relative flex flex-col px-5">
                    <h1 className="lg:text-6xl text-3xl font-gochi font-bold text-center pb-4 backdrop:bg-yellow-400">Sponsors</h1>
                    <div className="pb-10" />
                    <div className='grid grid-cols-4 gap-4 lg:px-36 justify-items-center place-content-center'>
                    </div>
                    <div className="flex flex-col gap-5">
                        <Title />
                        <Diamond />
                        <Platinum />
                        <Gold />
                        <Silver />
                    </div>
                    <div className="pb-10" />
                    {/* <div className="flex justify-center items-center p-5">
                        <button>
                            <a href="https://drive.google.com/file/d/1aiSKn4-GYlbp99a5vDLVWCbp9qC31pyz/view" target="_blank" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full" rel="noreferrer">
                                Sponsorship Deck
                            </a>
                        </button>
                    </div>
                    <p className="font-semibold text-gray-600 lg:text-center  lg:px-40 text-clip text-lg">
                        We are looking for sponsors to help us make this event a success. If you are interested in sponsoring this event, please contact us at <a href="mailto:dscjisu@gmail.com"
                            className="text-blue-500">
                            <span className="text-pink-600">
                                Mail
                            </span>
                        </a>
                    </p> */}
                </div>
                <div
                    className="lg:pb-20 pb-2"
                />
            </section>
        </>
    )
}

export default Sponsor