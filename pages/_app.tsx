import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CodeFest 2023</title>
        <meta name="description" content="Codefest 2023 is  Tech Fest organised by Google Developer Student Clubs JIS University - Kolkata" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@dscjisu" />
        <meta name="twitter:title" content="CodeFest" />
        <meta name="twitter:description" content="Codefest 2023 is  Tech Fest organised by Google Developer Student Clubs JIS University - Kolkata" />
        <meta name="twitter:image" content="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1200,q_100,w_1200/v1/gcs/platform-data-dsc/contentbuilder/GDG-Bevy-SocialShare-v2_vPiQuXZ.png" />
        <meta property="og:site_name" content="CodeFest 2023" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:image:secure_url" content="https://codefest.dscjisu.in/codefest.png" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:title" content="CodeFest" />
        <meta property="og:description" content="Codefest 2023 is  Tech Fest organised by Google Developer Student Clubs JIS University - Kolkata" />
        <meta property="og:url" content="https://codefest.dscjisu.in" />
        <meta property="og:type" content="website" />
        <meta property="og:ttl" content="777600" />
        <meta property="og:locale" content="en_US" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <main className='container mx-auto'>
        <Navbar />
        <NextNProgress
          color="#62B6B7"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          options={{ easing: 'ease', speed: 500, showSpinner: false }}
        />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp;
