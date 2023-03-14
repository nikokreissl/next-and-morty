import Image from "next/image";
import styled from "styled-components";
import Button from "../Button";
import { useRouter } from "next/router";

export default function Card({ name, image, id }) {
  const router = useRouter();
  function handleClick(id) {
    router.push(`/characters/${id}`);
  }

  return (
    <StyledCard>
      <Image src={image} alt={name} width={200} height={200} />
      <h2>{name}</h2>
      <Button onClick={() => handleClick(id)}>View Details</Button>
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
  margin: 20px;
`;
