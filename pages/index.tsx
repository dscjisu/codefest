import { useEffect } from 'react';
import About from '../layouts/About';
import CodeOfConduct from '../layouts/CodeOfConduct';
import CommunityPartner from '../layouts/CommunityPartner';
import Countdown from '../layouts/CountDown';
import Faq from '../layouts/Faqs';
import Landing from '../layouts/Landing';
import Organisation from '../layouts/Organisation';
import Organiser from '../layouts/Organiser';
import Speaker from '../layouts/Speaker';
import Sponsors from '../layouts/Sponsor';
// content 
import CommunityPartnerData from './../content/Community Partner.json';
import FaqsData from './../content/faqs.json';
import OrganisationData from './../content/Organisation.json';
import OrganiserData from './../content/organiser.json';
import SpeakerData from './../content/Speaker.json';


interface ISpeakerdata {
  name: string,
  subtitle: string,
  bio: string,
  image: string,
  tags: string[]
}

interface IOrganiserdata {
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
  Partner: ICommPartnerData[],
  Organisers: IOrganiserdata[]
}


export async function getStaticProps() {

  const Speakers = SpeakerData;
  const Organisations = OrganisationData;
  const Faqs = FaqsData;
  const Partner = CommunityPartnerData;
  const Organisers = OrganiserData


  return {
    props: {
      Speakers,
      Organisations,
      Faqs,
      Partner,
      Organisers
    }, // will be passed to the page component as props
  }
}

const Home = ({ Speakers, Organisations, Faqs, Partner, Organisers }: IProps) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <main>
        <Landing />
        <Countdown />
        <About />
        {/* <Timeline /> */}
        <Sponsors />
        <Organiser organiserData={Organisers} />
        <Organisation organisationData={Organisations} />
        <Speaker speakerData={Speakers} />
        <CommunityPartner partnerData={Partner} />
        <Faq FaqsData={Faqs} />
        <CodeOfConduct />
        {/* <SeeYou /> */}
      </main>
    </>
  );
};

export default Home;
