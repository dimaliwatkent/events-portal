import { Container, Separator } from "@radix-ui/themes";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Events from "./components/Events.jsx";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container size="3">
        <Hero />
        <Separator size="4" color="grass" />
        <Events />
        <Separator my="8" size="4" color="grass" />
      </Container>
    </main>
  );
}
