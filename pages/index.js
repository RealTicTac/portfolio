import Head from "next/head";
import Main from "features/Main/Main";
import About from "features/About/About";
import Skills from "features/Skills/Skills";
import Projects from "features/Projects/Projects";
import Contact from "features/Contact/Contact";

export default function Home() {
  return (
    <div className="dark:bg-dark duration-700 ease-in-out transition-colors">
      <Head>
        <title>Rais | Front-end developer</title>
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
