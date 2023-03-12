import "@/styles/globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
