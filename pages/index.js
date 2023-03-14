import { Inter } from "next/font/google";
import Card from "@/components/Card";
import Main from "@/components/Main";
import styled from "styled-components";
import { useContext } from "react";
import { CharacterContext } from "./_app";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useContext(CharacterContext);

  if (!data) {
    return <div>Loading...</div>;
  }

  const characters = data.results;
  return (
    <Main>
      <StyledCharachterList>
        {characters.map(({ id, name, image }) => (
          <li key={id}>
            <Card name={name} image={image} id={id} />
          </li>
        ))}
      </StyledCharachterList>
    </Main>
  );
}

const StyledCharachterList = styled.ul`
  list-style: none;
  margin-bottom: 50px;
`;
