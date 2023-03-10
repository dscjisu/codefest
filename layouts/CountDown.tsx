import { useEffect, useState } from 'react';

function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            // Set the date we're counting down to
            const countDownDate = new Date('March 10, 2023 00:00:00').getTime();

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the countdown date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes, and seconds
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
        }, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <>
            <section id="CommunityPartner" className="container mx-auto lg:px-10 p-2 py-20">
                <div className="relative flex flex-col px-5">
                    <h1 className="lg:text-6xl text-3xl font-gochi font-bold text-center pb-4">Registration Closing in...</h1>
                    <div className="pb-10" />
                    <div className='grid grid-cols-4 gap-4 lg:px-36 justify-items-center place-content-center'>
                        <div className='shadow-2xl shadow-pink-600 flex flex-col  justify-center items-center font-mono text-pink-600 rounded-lg bg-yellow-400 lg:w-60 p-1 md:w-20  min-w-full'>
                            <div>
                                <h1 className='lg:text-4xl font-bold'>{days}</h1>
                            </div>
                            <div>
                                <h1 className='lg:text-2xl text-xs font-bold text-black'>Days</h1>
                            </div>
                        </div>
                        <div className='shadow-2xl shadow-pink-600 flex flex-col justify-center items-center font-mono text-pink-600 rounded-lg bg-yellow-400 lg:w-60 p-1  md:w-20   min-w-full'>
                            <div>
                                <h1 className='lg:text-4xl font-bold'>{hours}</h1>
                            </div>
                            <div>
                                <h1 className='lg:text-2xl text-xs font-bold text-black'>Hours</h1>
                            </div>
                        </div>
                        <div className='shadow-2xl shadow-pink-600 flex flex-col justify-center items-center font-mono text-pink-600 rounded-lg bg-yellow-400 lg:w-60 p-1  min-w-full  md:w-20 '>
                            <div>
                                <h1 className='lg:text-4xl font-bold'>{minutes}</h1>
                            </div>
                            <div>
                                <h1 className='lg:text-2xl text-xs font-bold text-black'>Minutes</h1>
                            </div>
                        </div>
                        <div className='shadow-2xl shadow-pink-600 
                        flex flex-col justify-center items-center 
                        font-mono text-pink-600 rounded-lg 
                        bg-yellow-400 lg:w-60 p-1 md:w-20   min-w-full'>
                            <div>
                                <h1 className='lg:text-4xl font-bold'>{seconds}</h1>
                            </div>
                            <div>
                                <h1 className='lg:text-2xl text-xs font-bold text-black'>Seconds</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="lg:pb-20 pb-2"
                />
            </section>
        </>
    );
}

export default Countdown;
