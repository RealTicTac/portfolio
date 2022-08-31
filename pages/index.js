import Head from "next/head";
import Main from "components/Main";
import NavBar from "components/NavBar";
import About from "components/About";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rais | Front-end developer</title>
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
