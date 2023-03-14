import { useRouter } from "next/router";
import CharacterCard from "@/components/Character Card";
import { useContext } from "react";
import { CharacterContext } from "../_app";

export default function CharacterPage() {
  const router = useRouter();
  const id = Number(router.query.id);

  const { data } = useContext(CharacterContext);
  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(typeof data.results[0].id);

  const character = data.results.find((data) => data.id === id);

  return (
    <div>
      <CharacterCard character={character} />
    </div>
  );
}
