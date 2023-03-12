import "@/styles/globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );

  console.log(data);

  if (error) {
    console.log(error);
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Navigation />
    </>
  );
}
