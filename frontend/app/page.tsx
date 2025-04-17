import Image from "next/image";
import Homepage from "./pages/Homepage";
import { Hero } from "./objects/Hero";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Hero />
    </div>
  );
}
