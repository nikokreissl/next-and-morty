import { Inter } from "next/font/google";
import Card from "@/components/Card";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Main>
      <Card />
    </Main>
  );
}
