import Image from "next/image";
import styled from "styled-components";
import Button from "../Button";

export default function Card() {
  return (
    <StyledCard>
      <Image
        src={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
        alt={"Morty Smith"}
        width={200}
        height={200}
      />
      <h2>Morty Smith</h2>
      <Button>View Details</Button>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  width: 300px;
  padding: 20px;
  border: 2px solid white;
  border-radius: 25px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;
