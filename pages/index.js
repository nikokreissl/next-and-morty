import { Inter } from "next/font/google";
import Card from "@/components/Card";
import Main from "@/components/Main";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, error } = useSWR(
    "https://rickandmortyapi.com/api/character",
    fetcher
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  const characters = data.results;
  return (
    <Main>
      <ul>
        {characters.map(({ id, name, image }) => (
          <li key={id}>
            <Card name={name} image={image} />
          </li>
        ))}
      </ul>
      <Card />
    </Main>
  );
}
