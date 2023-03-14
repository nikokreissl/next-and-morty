import { useRouter } from "next/router";
import CharacterCard from "@/components/Character Card";
import { useContext } from "react";
import { CharacterContext } from "../_app";

export default function CharacterPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useContext(CharacterContext);
  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(data.results);

  const character = data.results.find((character) => character.id === id);

  console.log(character);

  return (
    <div>
      <CharacterCard character={character} />
    </div>
  );
}
