import About from '../layouts/About';
import CommunityPartner from '../layouts/CommunityPartner';
import Faqs from '../layouts/Faqs';
import Landing from '../layouts/Landing';
import Organisation from '../layouts/Organisation';
import SeeYou from '../layouts/SeeYou';
import Speaker from '../layouts/Speaker';
import Sponsors from '../layouts/Sponsor';
import Timeline from '../layouts/Timeline';
// content 

import OrganisationData from './../content/Organisation.json';
import SpeakerData from './../content/Speaker.json';



interface ISpeakerdata {
  name: string,
  subtitle: string,
  bio: string,
  image: string,
  tags: string[]
}
interface IOrganisationdata {
  name: string,
  image: string,
  link: string
}

interface IProps {
  Speakers: ISpeakerdata[],
  Organisations: IOrganisationdata[]
}


export async function getStaticProps() {

  const Speakers = SpeakerData;
  const Organisations = OrganisationData;


  return {
    props: {
      Speakers,
      Organisations
    }, // will be passed to the page component as props
  }
}

const Home = ({ Speakers, Organisations }: IProps) => {
  return (
    <>
      <main className='container mx-auto'>
        <Landing />
        <About />
        <Timeline />
        <Speaker speakerData={Speakers} />
        <Organisation organisationData={Organisations} />
        <Sponsors />
        <CommunityPartner />
        <Faqs />
        <SeeYou />
      </main>
    </>
  );
};

export default Home;
