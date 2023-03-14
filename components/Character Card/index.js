import Image from "next/image";
import styled from "styled-components";

export default function CharacterCard({ character }) {
  return (
    <StyledCharacterDetailCard>
      <Image
        src={character.image}
        alt={character.name}
        width={200}
        height={200}
      />
      <h2>{character.name}</h2>
      <p>Satus: {character.name}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    </StyledCharacterDetailCard>
  );
}

const StyledCharacterDetailCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
