import type { NextPage } from 'next';
import About from '../layouts/About';
import CommunityPartner from '../layouts/CommunityPartner';
import Faqs from '../layouts/Faqs';
import Landing from '../layouts/Landing';
import Organisation from '../layouts/Organisation';
import SeeYou from '../layouts/SeeYou';
import Speaker from '../layouts/Speaker';
import Sponsors from '../layouts/Sponsor';
import Timeline from '../layouts/Timeline';


const Home: NextPage = () => {
  return (
    <>
      <main className='container mx-auto'>
        <Landing />
        <About />
        <Timeline />
        <Speaker />
        <Organisation />
        <Sponsors />
        <CommunityPartner />
        <Faqs />
        <SeeYou />
      </main>
    </>
  );
};

export default Home;
