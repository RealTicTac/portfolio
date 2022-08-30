import Head from "next/head";
import Image from "next/image";
import Main from "components/Main";
import NavBar from "components/NavBar";
import About from "components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rais | Front-end developer</title>
      </Head>
      <NavBar />
      <Main />
      <About />
    </div>
  );
}
