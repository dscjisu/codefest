import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import FooterAnimation from '../assets/animation_gdsc.webp'


function Footer() {
    return (
        <div className='bg-[#171616]'>
            <div className="footer">
                <div className='grid  lg:grid-cols-3  lg:gap-2 gap-4 text-white  lg:p-10 p-2  lg:place-items-center '>
                    <div className='sm:col-span-1 col-span-3'>
                        <Image src="/Codefest.png" height={150} width={150} alt='Google developer Student Club' /> <br />
                    </div>


                    <div className='sm:col-span-1 col-span-3 bg-black h-full lg:p-5 p-1 rounded-lg'>
                        <div className='flex flex-row gap-4'>
                            <div className='basis-1/3 flex justify-center items-center'>
                                <Image src="/organisation/jisuniversity.jpg"
                                    height={100} width={100}
                                    className="rounded-sm"
                                    alt='JIS University Kolkata' />
                                <br />
                            </div>
                            <div className=' basis-2/3 flex flex-col'>
                                <span className='text-white  font-mono font-medium'>JIS University Kolkata</span>
                                <span className='text-white font-thin text-sm'>JIS University has an objective to provide instructions, teaching, training and research in various branches and specialised fields of Science, Engineering & Technology, Pharmacy, Management, Law, Social Sciences and Education. </span>
                            </div>
                        </div>
                    </div>
                    <div className='sm:col-span-1 col-span-3 h-full bg-black lg:p-5 p-1 rounded-lg'>
                        <div className='flex flex-row gap-4'>
                            <div className='basis-1/3 flex justify-center items-center'>
                                <Image src="/organisation/dscjisu.png"
                                    height={100} width={100}
                                    className="rounded-sm"
                                    alt='JIS University Kolkata' />
                            </div>
                            <div className=' basis-2/3 flex flex-col'>
                                <span className='text-white  font-mono font-medium'>Google Developer Student Club JIS University</span>
                                <span className='text-white font-thin text-sm'>
                                    Google Developer Student Clubs are university based community groups for students interested in Google developer technologies.
                                </span>
                            </div>
                        </div>
                    </div>







                </div>
                <div className='flex flex-row justify-between  lg:gap-2 gap-4 text-white  p-10 lg:place-items-center'>
                    <div className='sm:col-span-1 col-span-2'>
                        <span className=' text-white font-mono font-medium'>Made with ❤️ By CodeFest Team</span>
                    </div>
                    <div className='sm:col-span-1 col-span-2'>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Footer