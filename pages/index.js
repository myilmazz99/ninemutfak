import Head from "next/head";
import Jumbotron from "../components/Jumbotron";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Species from "../components/home/Species";
import dbConnect from "../utils/dbConnect";

export default function Home({ categories }) {
  return (
    <>
      <Head>
        <title>
          Ni & Ne Mutfak - İzmir'de Mantı, Ev Yemekleri, Meze, Hamurişi ve Pasta
        </title>
        <meta
          name="keywords"
          content="nine mutfak, izmir yemek, izmir mantı, izmir ev yemekleri, izmir yemek sipariş, izmir köfte, mutfak, yemek, mantı, kuru fasulye, pilav, meze, hamurişi, pasta, ev yemekleri, salata, kurabiye, ev hanımı, poğaça, börek"
        />
        <meta
          name="description"
          content="İzmir - Ni & Ne Mutfak - İzmir'den birbirinden lezzetli Mantı, Ev Yemekleri, Meze, Hamurişleri ve Pastalarla hizmetinizdeyiz. Ev yapımı nefis tatlara hemen ulaşmak için bizi arayın : 0 532 579 63 87"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Jumbotron />
      <About />
      <Services />
      <Species categories={categories} />
    </>
  );
}

export async function getStaticProps(context) {
  const { db } = await dbConnect();
  const categories = await db.collection("categories").find({}).toArray();
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
