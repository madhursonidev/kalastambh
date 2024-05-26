import Head from "next/head";
import Footer from "src/components/Footer";
import MainPosts from "src/components/MainPosts";
import SiteBanner from "src/components/SiteBanner";
import SiteHeader from "src/components/SiteHeader";
import SiteTop from "src/components/SiteTop";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kalastambh - International Art Group</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/kalastambh-icon.png"
        />
        <meta name="description" content="International Art Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kalastambh" />
        <meta property="og:description" content="International Art Group" />
        <meta property="og:url" content="http://kalastambh.com/" />
        <meta property="og:image" content="/images/53.jpeg" />
      </Head>

      <SiteHeader />
      <SiteBanner />
      <SiteTop />
      <MainPosts />
      <Footer />
    </div>
  );
}
