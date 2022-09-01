import { ThemeProvider } from "next-themes";

import NavBar from "features/NavBar/NavBar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem="true">
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
