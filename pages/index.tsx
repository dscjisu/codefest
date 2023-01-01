import About from '../layouts/About';
import CommunityPartner from '../layouts/CommunityPartner';
import Countdown from '../layouts/CountDown';
import Faq from '../layouts/Faqs';
import Landing from '../layouts/Landing';
import Organisation from '../layouts/Organisation';
import SeeYou from '../layouts/SeeYou';
import Speaker from '../layouts/Speaker';
import Sponsors from '../layouts/Sponsor';
import Timeline from '../layouts/Timeline';
// content 
import CommunityPartnerData from './../content/Community Partner.json';
import OrganisationData from './../content/Organisation.json';
import SpeakerData from './../content/Speaker.json';
import FaqsData from './../content/faqs.json';


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

interface ICommPartnerData {
  name: string,
  image: string,
  link: string,
}

interface IFaqs {
  question: string,
  answer: string
}
interface IProps {
  Speakers: ISpeakerdata[],
  Organisations: IOrganisationdata[],
  Faqs: IFaqs[],
  Partner: ICommPartnerData[]
}


export async function getStaticProps() {

  const Speakers = SpeakerData;
  const Organisations = OrganisationData;
  const Faqs = FaqsData;
  const Partner = CommunityPartnerData;


  return {
    props: {
      Speakers,
      Organisations,
      Faqs,
      Partner
    }, // will be passed to the page component as props
  }
}

const Home = ({ Speakers, Organisations, Faqs, Partner }: IProps) => {
  return (
    <>
      <main>
        <Landing />
        <Countdown />
        <About />
        <Timeline />
        <Sponsors />
        <Organisation organisationData={Organisations} />
        <Speaker speakerData={Speakers} />
        <CommunityPartner partnerData={Partner} />
        <Faq FaqsData={Faqs} />
        <SeeYou />
      </main>
    </>
  );
};

export default Home;
