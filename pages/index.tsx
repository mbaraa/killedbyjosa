import { GetStaticProps } from "next";
import Head from "next/head";
import slugify from "slugify";

// Data
import graveyard from "graveyard.json";

// Components
import Header from "components/Header";
import App from "components/App";
import Footer from "components/Footer";
import { ProductWithSlug } from "types/Product";

const HomePage: React.FC<{ items: ProductWithSlug[] }> = ({ items }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5"
        />
        <meta
          name="description"
          content="Killed by JOSA is the JOSA Graveyard. A full list of dead products killed by JOSA in the JOSA Cemetery."
        />
        <link rel="shortcut icon" href="favicon.png" />
        <title>JOSA Graveyard - Killed by JOSA</title>
        <meta name="theme-color" content="#FAFAFA" />
        <link rel="canonical" href="https://killedbyjosa.org" />
        <meta
          name="image"
          content="https://killedbyjosa.org/social/card.png"
        ></meta>
        <meta itemProp="name" content="Killed by JOSA" />
        <meta
          itemProp="description"
          content="Killed by JOSA is the JOSA Graveyard. A full list of dead products killed by JOSA in the JOSA Cemetery."
        />
        <meta
          itemProp="image"
          content="https://killedbyjosa.org/social/card.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Killed by JOSA" />
        <meta
          name="twitter:description"
          content="Killed by JOSA is the JOSA Graveyard. A full list of dead products killed by JOSA in the JOSA Cemetery."
        />
        <meta name="twitter:site" content="@killedbygoogle" />
        <meta name="twitter:creator" content="@killedbygoogle" />
        <meta
          name="twitter:image:src"
          content="https://killedbyjosa.org/social/card-twitter.png"
        />
        <meta
          name="twitter:image"
          content="https://killedbyjosa.org/social/card-twitter.png"
        />
        <meta name="og:title" property="og:title" content="Killed by JOSA" />
        <meta
          name="og:url"
          property="og:url"
          content="https://killedbyjosa.org"
        />
        <meta
          name="og:description"
          property="og:description"
          content="Killed by JOSA is the open source list of dead JOSA products, services, and devices. It serves as a tribute and memorial of beloved services and products killed by JOSA."
        />
        <meta
          name="image"
          property="og:image"
          content="https://killedbyjosa.org/social/card.png"
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://killedbyjosa.org/social/card.png"
        />
        <meta
          name="og:site_name"
          property="og:site_name"
          content="Killed by JOSA"
        />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="author" content="Baraa Al-Masri" />
      </Head>
      <Header />
      <App items={items} />
      <Footer />
    </>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps = async (_context) => {
  slugify.extend({
    "+": "-plus",
    "@": "-at",
  });

  const processed = graveyard
    .map((item) => ({
      ...item,
      slug: slugify(item.name, {
        lower: true,
      }),
    }))
    .sort(
      (a, b) =>
        new Date(b.dateClose).getTime() - new Date(a.dateClose).getTime(),
    );

  return {
    props: {
      items: processed,
    },
  };
};
