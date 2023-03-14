import "@/styles/globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import useSWR from "swr";
import { createContext } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const CharacterContext = createContext();

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );

  return (
    <>
      <CharacterContext.Provider value={{ data, error }}>
        <Header />
        <Component {...pageProps} />
        <Navigation />
      </CharacterContext.Provider>
    </>
  );
}
