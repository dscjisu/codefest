
function Stats() {
    return (
        <section id="CodeFest Stats" className="container mx-auto lg:px-10 p-2 py-20">
            <div className="relative flex flex-col px-5">
                <h1 className="lg:text-6xl text-3xl font-gochi font-bold text-center pb-4">Why Codefest 2023 ?</h1>
                <div className="pb-10" />
                <div className='grid grid-cols-4 gap-4 lg:px-36 justify-items-center place-content-center'>
                    <div className='shadow-2xl shadow-pink-600 flex flex-col  justify-center items-center font-mono text-pink-600 rounded-lg bg-yellow-400 lg:w-60 p-1 md:w-20  min-w-full'>
                        <div>
                            <h1 className='lg:text-4xl font-bold'>700+</h1>
                        </div>
                        <div>
                            <h1 className='lg:text-2xl text-xs font-bold text-black'>Registration</h1>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-pink-600 flex flex-col justify-center items-center font-mono text-pink-600 rounded-lg bg-yellow-400 lg:w-60 p-1  md:w-20   min-w-full'>
                        <div>
                            <h1 className='lg:text-4xl font-bold'>400+</h1>
                        </div>
                        <div>
                            <h1 className='lg:text-2xl text-xs font-bold text-black'>Participants</h1>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-pink-600 flex flex-col justify-center items-center font-mono text-pink-600 rounded-lg bg-yellow-400 lg:w-60 p-1  min-w-full  md:w-20 '>
                        <div>
                            <h1 className='lg:text-4xl font-bold'>5+</h1>
                        </div>
                        <div>
                            <h1 className='lg:text-2xl text-xs font-bold text-black'>Days</h1>
                        </div>
                    </div>
                    <div className='shadow-2xl shadow-pink-600 
                        flex flex-col justify-center items-center 
                        font-mono text-pink-600 rounded-lg 
                        bg-yellow-400 lg:w-60 p-1 md:w-20   min-w-full'>
                        <div>
                            <h1 className='lg:text-4xl font-bold'>4+</h1>
                        </div>
                        <div>
                            <h1 className='lg:text-2xl text-xs font-bold text-black'>Talks</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="lg:pb-20 pb-2"
            />
        </section>
    )
}

export default Stats